module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['import', 'prettier'],
}
