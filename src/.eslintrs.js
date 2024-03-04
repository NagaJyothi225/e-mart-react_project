module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true
    },
    settings: {
      'import/resolver': {
        webpack: {
          config: `${PATHS.config}/webpack.base.js`
        }
      },
    },
    extends: [
      'plugin:react/recommended',
      'plugin:jest/recommended'
    ],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      'max-len': [2, 120, 2],
      'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
      'import/no-unresolved': ['error', { ignore: [rootImportRegex] }],
      'import/extensions': ['warning', 'ignorePackages']
    }
  };