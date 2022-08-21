module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  overrides: [
    {
      files: ['src/**/test/*.test.js'],
      env: { mocha: true },
      rules: {
        'max-nested-callbacks': ['error', 8],
        'max-statements': ['error', 30],
        'import/no-extraneous-dependencies': 0,
        'no-unused-expressions': 0, // configured to avoid error no-unused-expressions when usin expect in test files
      },
    },
  ],
};
