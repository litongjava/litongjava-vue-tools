import BrowserVersion from './lib/browser-version'

export default {
  install(Vue) {
    Vue.component('browser-version', BrowserVersion);
  }
};