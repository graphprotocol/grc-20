export default {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  ignorePatterns: ['node_modules/**/*', '.turbo/**/*', '.cache/**/*', '**/*.js', '**/*.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-interface': 0,
    'no-undef': 1,
    'no-unused-vars': 0, // this gets handled by @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-as-const': 0,
  },
};
