import {
  CATEGORIES,
  CATALOG_SECTIONS,
  DEFAULT_TARGET,
  escapeHtml,
  pick,
} from './questionbank/index.js';

// ── State ──────────────────────────────────────────────────
const STATE = {
  xp: 0,
  streak: 0,
  correct: 0,
  total: 0,
  activeCategory: null,
  view: 'catalog',
  categoryProgress: {},
  timerInterval: null,
  timerSecs: 0,
  currentQ: null,
  answered: false,
};

const LOCAL_PROGRESS_KEY = 'roadtombb_category_progress';

// ── Supabase Auth & Persistence ─────────────────────────────
let sb = null;
function initSupabase() {
  const cfg = window.__SUPABASE_CONFIG__;
  const createClient = window.__supabaseCreateClient__;
  if (cfg?.url && cfg?.anonKey && createClient) {
    sb = createClient(cfg.url, cfg.anonKey);
  }
}

let authMode = 'signin';

function openAuthModal() {
  if (!sb) return;
  authMode = 'signin';
  document.getElementById('authModalTitle').textContent = 'Sign in';
  document.getElementById('authSubmit').textContent = 'Sign in';
  document.getElementById('authToggle').innerHTML =
    'No account? <a onclick="switchAuthMode(\'signup\')">Sign up</a>';
  document.getElementById('authError').textContent = '';
  document.getElementById('authForm').reset();
  document.getElementById('authModal').classList.add('show');
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('show');
}

function switchAuthMode(mode) {
  authMode = mode;
  document.getElementById('authError').textContent = '';
  if (mode === 'signup') {
    document.getElementById('authModalTitle').textContent = 'Create account';
    document.getElementById('authSubmit').textContent = 'Sign up';
    document.getElementById('authToggle').innerHTML =
      'Already have an account? <a onclick="switchAuthMode(\'signin\')">Sign in</a>';
  } else {
    document.getElementById('authModalTitle').textContent = 'Sign in';
    document.getElementById('authSubmit').textContent = 'Sign in';
    document.getElementById('authToggle').innerHTML =
      'No account? <a onclick="switchAuthMode(\'signup\')">Sign up</a>';
  }
}

async function submitAuth(e) {
  e.preventDefault();
  if (!sb) return false;
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  const errEl = document.getElementById('authError');
  const btn = document.getElementById('authSubmit');
  errEl.textContent = '';
  btn.disabled = true;
  try {
    if (authMode === 'signup') {
      const { error } = await sb.auth.signUp({ email, password });
      if (error) throw error;
    } else {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
    }
    closeAuthModal();
    const {
      data: { user },
    } = await sb.auth.getUser();
    updateAuthUI(user);
    if (user) await loadProgress().then(() => {
      updateStats();
      renderCatalog();
    });
  } catch (err) {
    errEl.textContent = err.message || 'Something went wrong';
  }
  btn.disabled = false;
  return false;
}

async function signOut() {
  if (!sb) return;
  await sb.auth.signOut();
  STATE.xp = 0;
  STATE.streak = 0;
  STATE.correct = 0;
  STATE.total = 0;
  STATE.categoryProgress = {};
  updateStats();
  renderCatalog();
  updateAuthUI(null);
}

function updateAuthUI(user) {
  const btnSignIn = document.getElementById('btnSignIn');
  const userPill = document.getElementById('userPill');
  const userEmail = document.getElementById('userEmail');
  const authBanner = document.getElementById('authBanner');
  if (!sb) {
    btnSignIn.style.display = 'none';
    userPill.style.display = 'none';
    authBanner.classList.remove('show');
    return;
  }
  if (user) {
    btnSignIn.style.display = 'none';
    userPill.style.display = 'flex';
    userEmail.textContent = user.email || 'Signed in';
    authBanner.classList.remove('show');
  } else {
    btnSignIn.style.display = 'flex';
    userPill.style.display = 'none';
    authBanner.classList.add('show');
  }
}

async function loadProgress() {
  if (!sb) return;
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return;
  const { data } = await sb
    .from('user_progress')
    .select('xp, streak, correct, total')
    .eq('user_id', user.id)
    .single();
  if (data) {
    STATE.xp = data.xp ?? 0;
    STATE.streak = data.streak ?? 0;
    STATE.correct = data.correct ?? 0;
    STATE.total = data.total ?? 0;
  }
  await loadCategoryProgress();
}

function loadLocalCategoryProgress() {
  try {
    const raw = localStorage.getItem(LOCAL_PROGRESS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      STATE.categoryProgress = parsed;
    }
  } catch (e) {
    /* ignore */
  }
}

function saveLocalCategoryProgress() {
  try {
    localStorage.setItem(LOCAL_PROGRESS_KEY, JSON.stringify(STATE.categoryProgress));
  } catch (e) {
    /* ignore */
  }
}

async function loadCategoryProgress() {
  if (sb) {
    const {
      data: { user },
    } = await sb.auth.getUser();
    if (user) {
      try {
        const { data, error } = await sb
          .from('user_category_progress')
          .select('category_id, correct, total')
          .eq('user_id', user.id);
        if (error) throw error;
        STATE.categoryProgress = {};
        (data || []).forEach((row) => {
          STATE.categoryProgress[row.category_id] = {
            correct: row.correct,
            total: row.total,
          };
        });
        return;
      } catch (e) {
        console.warn('user_category_progress:', e.message || e);
        return;
      }
    }
  }
  loadLocalCategoryProgress();
}

async function saveProgress() {
  if (!sb) return;
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return;
  await sb.from('user_progress').upsert(
    {
      user_id: user.id,
      xp: STATE.xp,
      streak: STATE.streak,
      correct: STATE.correct,
      total: STATE.total,
      unlocked_level: 1,
      active_level: 1,
    },
    { onConflict: 'user_id' },
  );
}

async function saveCategoryProgressRow(categoryId) {
  if (!sb || !categoryId) return;
  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) return;
  const p = STATE.categoryProgress[categoryId] || { correct: 0, total: 0 };
  await sb.from('user_category_progress').upsert(
    {
      user_id: user.id,
      category_id: categoryId,
      correct: p.correct,
      total: p.total,
      last_practiced_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,category_id' },
  );
}

const XP_MILESTONES = [200, 500, 1000, 2000, 3500, 5000, 10000];
const DIFFICULTY_XP = { easy: 12, medium: 20, hard: 28, mixed: 18 };

// ── Catalog & drill ─────────────────────────────────────────

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  const sectionsHtml = CATALOG_SECTIONS.map((sec) => {
    const cards = sec.categoryIds
      .map((id) => {
        const c = CATEGORIES[id];
        if (!c) return '';
        const p = STATE.categoryProgress[id] || { correct: 0, total: 0 };
        const target = c.target ?? DEFAULT_TARGET;
        const progress = `${p.total} / ${target}`;
        return `<button type="button" class="catalog-card" data-cat="${escapeHtml(id)}">
      <span class="catalog-rank">#${c.rank} · ${escapeHtml(c.difficultyLabel)}</span>
      <span class="catalog-name">${escapeHtml(c.name)}</span>
      <span class="catalog-progress">${escapeHtml(progress)}</span>
    </button>`;
      })
      .join('');
    return `<div class="catalog-section">
      <div class="catalog-section-head">
        <h3 class="catalog-section-title">${escapeHtml(sec.title)}</h3>
        <p class="catalog-section-blurb">${escapeHtml(sec.blurb)}</p>
      </div>
      <div class="catalog-grid">${cards}</div>
    </div>`;
  }).join('');
  grid.innerHTML = `<div class="catalog-sections">${sectionsHtml}</div>`;
  grid.querySelectorAll('.catalog-card').forEach((btn) => {
    btn.addEventListener('click', () => startDrill(btn.getAttribute('data-cat')));
  });
}

function startDrill(categoryId) {
  STATE.view = 'drill';
  STATE.activeCategory = categoryId;
  document.getElementById('catalogView').style.display = 'none';
  document.getElementById('drillView').style.display = 'block';
  const title = categoryId ? CATEGORIES[categoryId].name : 'Random mix';
  document.getElementById('drillTitle').textContent = title;
  updatePracticeBadge();
  loadQuestion();
}

function backToCatalog() {
  clearInterval(STATE.timerInterval);
  STATE.timerInterval = null;
  STATE.view = 'catalog';
  STATE.activeCategory = null;
  document.getElementById('drillView').style.display = 'none';
  document.getElementById('catalogView').style.display = 'block';
  document.getElementById('questionCard').className = 'question-card';
  document.getElementById('feedbackPanel').className = 'feedback-panel';
  document.getElementById('nextBtn').style.display = 'none';
  updatePracticeBadge();
  renderCatalog();
}

function updatePracticeBadge() {
  const el = document.getElementById('levelBadge');
  if (STATE.view === 'catalog') {
    el.textContent = 'Topics';
  } else {
    el.textContent = STATE.activeCategory
      ? CATEGORIES[STATE.activeCategory].name
      : 'Random mix';
  }
}

function generateQuestion() {
  let catId = STATE.activeCategory;
  if (!catId) {
    catId = pick(Object.keys(CATEGORIES));
  }
  const cat = CATEGORIES[catId];
  const gen = pick(cat.generators);
  const q = gen();
  q.categoryId = catId;
  q.difficultyKey = cat.difficulty;
  return q;
}

function startTimer() {
  STATE.timerSecs = 0;
  clearInterval(STATE.timerInterval);
  STATE.timerInterval = setInterval(() => {
    STATE.timerSecs++;
    const m = Math.floor(STATE.timerSecs / 60);
    const s = STATE.timerSecs % 60;
    const el = document.getElementById('timer');
    el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    el.className = 'timer' + (STATE.timerSecs > 90 ? ' fast' : '');
  }, 1000);
}

function setDifficultyChip(q) {
  const el = document.getElementById('difficultyChip');
  if (!el) return;
  const cat = CATEGORIES[q.categoryId];
  const tier = q.questionDifficulty;
  const tierLabels = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  if (tier && tierLabels[tier]) {
    el.textContent = tierLabels[tier];
    el.className = 'difficulty-chip ' + tier;
    return;
  }
  el.textContent = cat?.difficultyLabel ?? '—';
  el.className = 'difficulty-chip fallback';
}

function loadQuestion() {
  STATE.answered = false;
  STATE.currentQ = generateQuestion();
  const q = STATE.currentQ;

  document.getElementById('questionText').textContent = q.question;
  document.getElementById('hintText').textContent =
    q.hint || 'Use the definition from the case framework, then plug in the numbers.';
  const hintEl = document.getElementById('hintDetails');
  if (hintEl) hintEl.open = false;
  document.getElementById('categoryBadge').textContent = q.category;
  setDifficultyChip(q);
  document.getElementById('feedbackPanel').className = 'feedback-panel';
  document.getElementById('streakBanner').className = 'streak-banner';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('answerInput').value = '';
  document.getElementById('answerInput').disabled = false;
  document.getElementById('answerInput').focus();
  document.getElementById('questionCard').className = 'question-card';
  startTimer();
}

function parseAnswer(raw) {
  let s = raw.replace(/[$%,\s]/g, '').toUpperCase();
  let mult = 1;
  if (s.endsWith('B')) {
    mult = 1e9;
    s = s.slice(0, -1);
  } else if (s.endsWith('M')) {
    mult = 1e6;
    s = s.slice(0, -1);
  } else if (s.endsWith('K')) {
    mult = 1e3;
    s = s.slice(0, -1);
  }
  const n = parseFloat(s) * mult;
  return isNaN(n) ? null : n;
}

/**
 * @param {number} userNum
 * @param {{ answer: number, tolerance?: number, exact?: number }} q
 */
function checkAnswer(userNum, q) {
  const answer = q.answer;
  const tol = q.tolerance ?? 0;
  if (tol > 0) {
    return Math.abs(userNum - answer) <= tol;
  }
  const EPS = 1e-9;
  if (q.exact !== undefined) {
    const ex = q.exact;
    if (Math.abs(ex - answer) < EPS) {
      return Math.abs(userNum - answer) < EPS;
    }
    return userNum >= answer - 0.5 && userNum < answer + 0.5 - EPS;
  }
  return userNum === answer;
}

function submitAnswer() {
  if (STATE.answered) return;
  const raw = document.getElementById('answerInput').value.trim();
  if (!raw) return;
  STATE.answered = true;
  clearInterval(STATE.timerInterval);

  const userNum = parseAnswer(raw);
  const q = STATE.currentQ;
  const correct = userNum !== null && checkAnswer(userNum, q);

  STATE.total++;
  const panel = document.getElementById('feedbackPanel');
  const card = document.getElementById('questionCard');

  if (correct) {
    STATE.correct++;
    STATE.streak++;

    const baseXP = DIFFICULTY_XP[q.difficultyKey] || 18;
    const bonus = STATE.streak >= 3 ? Math.floor(baseXP * 0.5) : 0;
    const totalXP = baseXP + bonus;
    const prevXp = STATE.xp;

    STATE.xp += totalXP;
    bumpCategoryProgress(q.categoryId, true);
    updateXP();

    panel.className = 'feedback-panel show correct';
    document.getElementById('feedbackIcon').textContent = '✓';
    document.getElementById('feedbackTitle').textContent = 'Correct!';
    document.getElementById('xpGained').textContent = `+${totalXP} XP${bonus > 0 ? ' 🔥' : ''}`;
    document.getElementById('solutionText').innerHTML = q.solution;
    card.className = 'question-card flash-correct';

    if (STATE.streak >= 3) {
      document.getElementById('streakBanner').className = 'streak-banner show';
    }

    const newlyCrossed = XP_MILESTONES.filter((t) => prevXp < t && STATE.xp >= t);
    if (newlyCrossed.length) {
      showMilestoneModal(Math.max(...newlyCrossed));
    }
  } else {
    STATE.streak = 0;
    bumpCategoryProgress(q.categoryId, false);
    panel.className = 'feedback-panel show wrong';
    document.getElementById('feedbackIcon').textContent = '✗';
    document.getElementById('feedbackTitle').textContent = `Correct answer: ${q.answer.toLocaleString()}`;
    document.getElementById('xpGained').textContent = '+0 XP';
    document.getElementById('solutionText').innerHTML = q.solution;
    card.className = 'question-card flash-wrong';
  }

  document.getElementById('answerInput').disabled = true;
  document.getElementById('nextBtn').style.display = 'block';
  updateStats();
  saveProgress();
  if (q.categoryId) saveCategoryProgressRow(q.categoryId);
}

function bumpCategoryProgress(categoryId, wasCorrect) {
  if (!categoryId) return;
  const p = STATE.categoryProgress[categoryId] || { correct: 0, total: 0 };
  p.total++;
  if (wasCorrect) p.correct++;
  STATE.categoryProgress[categoryId] = p;
  if (!sb) {
    saveLocalCategoryProgress();
    return;
  }
  sb.auth.getUser().then(({ data: { user } }) => {
    if (!user) saveLocalCategoryProgress();
  });
}

function skipQuestion() {
  if (STATE.answered) return;
  STATE.answered = true;
  STATE.streak = 0;
  STATE.total++;
  clearInterval(STATE.timerInterval);

  const q = STATE.currentQ;
  bumpCategoryProgress(q.categoryId, false);
  const panel = document.getElementById('feedbackPanel');
  panel.className = 'feedback-panel show wrong';
  document.getElementById('feedbackIcon').textContent = '→';
  document.getElementById('feedbackTitle').textContent = `Answer: ${q.answer.toLocaleString()}`;
  document.getElementById('xpGained').textContent = 'Skipped';
  document.getElementById('solutionText').innerHTML = q.solution;
  document.getElementById('answerInput').disabled = true;
  document.getElementById('nextBtn').style.display = 'block';
  updateStats();
  saveProgress();
  if (q.categoryId) saveCategoryProgressRow(q.categoryId);
}

function nextQuestion() {
  loadQuestion();
}

function getXPBarSegment(xp) {
  const milestones = [0, 200, 500, 1000, 2000, 3500, 5000, 10000];
  let low = 0;
  let high = 200;
  for (let i = 0; i < milestones.length - 1; i++) {
    if (xp >= milestones[i] && xp < milestones[i + 1]) {
      low = milestones[i];
      high = milestones[i + 1];
      break;
    }
  }
  if (xp >= milestones[milestones.length - 1]) {
    low = milestones[milestones.length - 1];
    high = low + 2500;
  }
  const span = Math.max(1, high - low);
  const pct = Math.min(100, Math.round(((xp - low) / span) * 100));
  return { pct, high, low };
}

function updateXP() {
  const xp = STATE.xp;
  const { pct, high } = getXPBarSegment(xp);
  document.getElementById('xpBar').style.width = pct + '%';
  document.getElementById('xpLabel').textContent = `${xp.toLocaleString()} XP`;
  const remain = Math.max(0, high - xp);
  document.getElementById('xpNext').textContent =
    xp >= 10000
      ? 'Outstanding — keep building mastery'
      : `${remain.toLocaleString()} XP to ${high.toLocaleString()} milestone`;
  document.getElementById('statXP').textContent = xp.toLocaleString();
}

function showMilestoneModal(threshold) {
  document.getElementById('modalMilestoneText').textContent = `You passed ${threshold.toLocaleString()} total XP`;
  document.getElementById('milestoneModal').className = 'modal-overlay show';
}

function closeMilestoneModal() {
  document.getElementById('milestoneModal').className = 'modal-overlay';
}

function updateStats() {
  document.getElementById('statStreak').textContent =
    STATE.streak + (STATE.streak >= 3 ? ' 🔥' : '');
  const acc = STATE.total > 0 ? Math.round((STATE.correct / STATE.total) * 100) : 0;
  document.getElementById('statAccuracy').textContent = STATE.total > 0 ? `${acc}%` : '—';
  document.getElementById('statCorrect').textContent = STATE.correct;
  updateXP();
}

document.getElementById('answerInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (STATE.answered) nextQuestion();
    else submitAnswer();
  }
});

async function init() {
  STATE.view = 'catalog';
  document.getElementById('catalogView').style.display = 'block';
  document.getElementById('drillView').style.display = 'none';
  updateAuthUI(null);
  if (sb) {
    sb.auth.onAuthStateChange((event, session) => {
      updateAuthUI(session?.user ?? null);
      if (event === 'SIGNED_IN' && session) {
        loadProgress().then(() => {
          updateStats();
          renderCatalog();
        });
      }
    });
    const {
      data: { session },
    } = await sb.auth.getSession();
    updateAuthUI(session?.user ?? null);
    if (session) {
      await loadProgress();
    } else {
      await loadCategoryProgress();
    }
  } else {
    await loadCategoryProgress();
  }
  updatePracticeBadge();
  updateStats();
  renderCatalog();
  document.getElementById('catalogRandomBtn')?.addEventListener('click', () => startDrill(null));
}

Object.assign(window, {
  openAuthModal,
  closeAuthModal,
  switchAuthMode,
  submitAuth,
  signOut,
  backToCatalog,
  submitAnswer,
  skipQuestion,
  nextQuestion,
  closeMilestoneModal,
});

(async function boot() {
  try {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    window.__supabaseCreateClient__ = createClient;
  } catch (e) {
    console.warn('Supabase client failed to load:', e);
  }
  initSupabase();
  await init();
})();
