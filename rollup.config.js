import alias from '@rollup/plugin-alias';
import eslint from '@rollup/plugin-eslint';
import nodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy-watch';
import serve from 'rollup-plugin-serve';
import vuePlugin from 'rollup-plugin-vue';

export default commandLineArgs => {
  const config = {
    input: 'src/app.js',
    output: {
      format: 'es',
      file: 'dist/src/app.js',
      sourcemap: true
    },
    plugins: [
      eslint(),
      alias({
        entries: {
          'three': 'three/build/three.module.js',
          'vue': 'vue/dist/vue.esm.browser.js',
          'vuex': 'vuex/dist/vuex.esm.browser.js',
          'vue-gl': 'vue-gl/dist/vue-gl.esm.js'
        }
      }),
      nodeResolve(),
      vuePlugin()
    ]
  };

  const copyConfig = {
    targets: [
      { src: 'public/**', dest: 'dist' }
    ]
  };

  if (commandLineArgs.configServe === true) {
    copyConfig.watch = 'public';
  }
  config.plugins.push(copy(copyConfig));
  
  if (commandLineArgs.configServe === true) {
    config.plugins.push(
      serve({
        contentBase: 'dist',
        open: true
    }));
  }

  return config;
};