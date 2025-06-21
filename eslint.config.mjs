import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import unUsedVars from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    // note - intentionally uses computed syntax to make it easy to sort the keys
    plugins: {
      ['unused-imports']: unUsedVars,
    },
  },
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      // Отключаем правило React о необходимости импорта React в JSX
      'react/react-in-jsx-scope': 'off',
      // Правила для удаления неиспользуемых импортов
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': [
        'off',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Отключаем стандартные правила no-unused-vars и @typescript-eslint/no-unused-vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];

export default eslintConfig;
