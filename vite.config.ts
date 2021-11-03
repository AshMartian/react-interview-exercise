import { defineConfig, Alias } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import * as tsconfig from './tsconfig.paths.json';

function readAliasFromTsConfig(): Alias[] {
  const pathReplaceRegex = new RegExp(/\/\*$/, '');
  return Object.entries(tsconfig.compilerOptions.paths).reduce(
      (aliases, [fromPaths, toPaths]) => {
          const find = fromPaths.replace(pathReplaceRegex, '');
          const toPath = toPaths[0].replace(pathReplaceRegex, '');
          const replacement = path.resolve(__dirname, toPath);
          aliases.push({ find, replacement });
          return aliases;
      },
      [] as Alias[],
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [...readAliasFromTsConfig()] as Alias[]
  }
})

