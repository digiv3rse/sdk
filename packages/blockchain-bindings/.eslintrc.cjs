module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@digiv3rse/eslint-config'],
  ignorePatterns: ['**/types/*.ts'],
};
