module.exports = {
  allowUncaught: true,
  asyncOnly: true,
  bail: true,
  checkLeaks: true,
  dryRun: true,
  failZero: true,
  forbidOnly: true,
  retries: 3,
  slow: '100',
  timeout: '2000',
  ui: 'bdd',
  spec: 'src/**/test/*.test.mjs'
};
