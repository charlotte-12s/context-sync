const fs = require('fs');
const skills = ['sync-scan', 'sync-watch', 'sync-enforce'];
let ok = true;

skills.forEach(s => {
  const p = 'skills/' + s + '/SKILL.md';
  if (!fs.existsSync(p)) {
    console.error('MISSING: ' + p);
    ok = false;
  } else {
    const c = fs.readFileSync(p, 'utf8');
    if (!c.includes('name:') || !c.includes('description:')) {
      console.error('INVALID FRONTMATTER: ' + p);
      ok = false;
    }
  }
});

['scan-checklist', 'context-template'].forEach(r => {
  if (!fs.existsSync('skills/sync-scan/references/' + r + '.md')) {
    console.error('MISSING: skills/sync-scan/references/' + r + '.md');
    ok = false;
  }
});

if (!fs.existsSync('skills/sync-watch/references/diff-strategy.md')) {
  console.error('MISSING: skills/sync-watch/references/diff-strategy.md');
  ok = false;
}

['violation-catalog', 'fix-patterns'].forEach(r => {
  if (!fs.existsSync('skills/sync-enforce/references/' + r + '.md')) {
    console.error('MISSING: skills/sync-enforce/references/' + r + '.md');
    ok = false;
  }
});

if (!fs.existsSync('CLAUDE.md')) {
  console.error('MISSING: CLAUDE.md');
  ok = false;
}

if (!fs.existsSync('install.sh')) {
  console.error('MISSING: install.sh');
  ok = false;
}

if (ok) {
  console.log('All files valid');
} else {
  process.exit(1);
}
