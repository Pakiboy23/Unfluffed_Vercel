import esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

const isProduction = process.argv.includes('--production')

const postcssProcessor = postcss([tailwindcss, autoprefixer])

esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outfile: 'dist/bundle.js',
  loader: {
    '.js': 'jsx',
    '.ts': 'tsx',
    '.tsx': 'tsx',
    '.jsx': 'jsx',
    '.css': 'css',
    '.scss': 'css',
    '.sass': 'css',
  },
  plugins: [
    sassPlugin({
      async transform(source, resolveDir) {
        const { css } = await postcssProcessor.process(source, {
          from: undefined,
          to: undefined,
          map: false,
        })
        return css
      },
    }),
  ],
  define: {
    'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
  },
  minify: isProduction,
  sourcemap: !isProduction,
  format: 'esm',
  target: 'es2017',
}).catch(() => process.exit(1))