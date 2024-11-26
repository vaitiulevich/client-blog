import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Specify the directories and file extensions to check
    // files: ['src/app/**/**/*.{ts,tsx}'],
    files: ['src/app/**/**/*.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      import: eslintPluginImport,
      'unused-imports': eslintPluginUnusedImports,
    },
    rules: {
      // Sorting imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      // Removing unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
