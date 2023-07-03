import BrowserVersion from './dist/browser-version'

export default {
  install(Vue) {
    Vue.component('browser-version', BrowserVersion);
  }
};