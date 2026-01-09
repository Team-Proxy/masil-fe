import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';

const eslintConfig = defineConfig([
  ...nextVitals,
  prettier,
  ...nextTs,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules, // import 문을 위한 권장 규칙
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js 내장 모듈 (fs, path 등)
            'external', // node_modules (react, next/image 등)
            'internal', // 프로젝트 내부 절대 경로 (@/...)
            ['parent', 'sibling', 'index'], // ../ , ./ 같은 상대 경로
            'object', // import obj = require('x') 같은 특수 케이스
            'type', // import type { Foo } from '...'
          ],
          pathGroups: [
            {
              pattern: '@/**', // @/로 시작하는 모든 경로
              group: 'internal', // internal 그룹으로 취급
              position: 'after', // external 다음에 배치
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      'import/resolver': {
        node: {},
        typescript: {
          directory: './src',
        },
      },
      'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
