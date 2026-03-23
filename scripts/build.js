#!/usr/bin/env node
// Generates app/config.js from env vars (for Vercel deployment)
const fs = require('fs');
const path = require('path');

const config = {
  url: process.env.SUPABASE_URL || '',
  anonKey: process.env.SUPABASE_ANON_KEY || '',
};

const out = path.join(__dirname, '..', 'app', 'config.js');
fs.writeFileSync(out, `window.__SUPABASE_CONFIG__ = ${JSON.stringify(config)};\n`);
console.log('Generated app/config.js');
