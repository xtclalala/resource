module.exports = {
  tabWidth: 4,
  jsxSingleQuote: false,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  doubleQuote: false,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}
