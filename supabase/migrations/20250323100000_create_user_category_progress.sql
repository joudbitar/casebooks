-- Per-category practice stats for roadmap / catalog
create table if not exists public.user_category_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  category_id text not null,
  correct int not null default 0,
  total int not null default 0,
  last_practiced_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, category_id)
);

alter table public.user_category_progress enable row level security;

create policy "Users can view own category progress"
  on public.user_category_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own category progress"
  on public.user_category_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own category progress"
  on public.user_category_progress for update
  using (auth.uid() = user_id);

create policy "Users can delete own category progress"
  on public.user_category_progress for delete
  using (auth.uid() = user_id);

create trigger user_category_progress_updated_at
  before update on public.user_category_progress
  for each row execute function public.update_updated_at();
