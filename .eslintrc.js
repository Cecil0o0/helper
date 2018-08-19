// https://eslint.org/docs/user-guide/configuring

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  extends: 'vue',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended'
  ],
  globals: {
    echarts: true
  },
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'no-console': isProduction ? 1 : 0
  }
}
