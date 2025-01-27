import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules',
      '.next',
      'dist',
      'public',
      'coverage',
      'eslint.config.mjs',
      'tailwind.config.js',
      'postcss.config.js',
      'next-env.d.ts',
    ],
  },
]

export default eslintConfig
