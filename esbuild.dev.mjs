import * as esbuild from 'esbuild'
import { copy } from 'esbuild-plugin-copy'
import { sassPlugin } from 'esbuild-sass-plugin'
import server from 'esbuild-server'

let examplePlugin = {
  name: 'example',
  setup(build) {
    build.onEnd(result => {
      console.log(`${new Date().toLocaleTimeString('it-IT')}: build ended with ${result.errors.length} errors`)
    })
  },
}

// esbuild src/app.jsx --bundle --outfile=../priv/static/app.js --watch
let ctx = await esbuild.context({
  entryPoints: ['src/app.jsx', 'css/app.sass'],
  bundle: true,
  sourcemap: 'inline',
  outdir: './dist',
  target: [
    'esnext'
  ],
  plugins: [
    sassPlugin(),
    examplePlugin,
    copy({
      resolveFrom: 'cwd',
      assets: {
        from: ['./images/*'],
        to: ['./dist/images'],
      },
    }),
    copy({
      resolveFrom: 'cwd',
      assets: {
        from: ['./src/*.html'],
        to: ['./dist'],
      },
    }),
  ],
})
await ctx.watch()

server.createServer(
  {
    bundle: false,
    entryPoints: ['src/app.jsx']
  },
  {
    static: 'dist',
    port: 8000
  }
)
.start()



console.log('Watching and listen on http://localhost:8000')
