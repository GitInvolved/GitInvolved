module.exports = {
  trailingComma: 'es5',
  arrowParens: 'always',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  useTabs: false,
  overrides: [
    {
      files: '*.json',
      options: {
        semi: false,
      },
    },
  ],
};
