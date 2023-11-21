module.exports = {
    parser: 'babel-eslint', // Use babel-eslint parser for parsing JavaScript/React code
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'react-hooks'],
    rules: {
      // Add your custom rules here
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Other rules...
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  };
  