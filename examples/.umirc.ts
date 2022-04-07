import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mountElementId: 'root',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  extraBabelPlugins: ['babel-plugin-no-debugger'],
  publicPath: './',
});
