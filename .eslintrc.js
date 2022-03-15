module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended'
  ],
  globals: {
    '__DEV__': 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        'no-inline-styles': false
      },
    ],
    '@typescript-eslint/no-unused-vars': off,
    'semi': error,
    'no-use-before-define': off,
    'react/react-in-jsx-scope': off,
    'camelcase': off,
    'react/prop-types': off,
    'react/display-name': off
  },
};
