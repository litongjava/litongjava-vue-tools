<template>
<div>
  <p>Your browser information:</p>
  <p>Browser Name: {{ browserInfo.name }}</p>
  <p>Browser Version: {{ browserInfo.version }}</p>
</div>
</template>

<script>
export default {
  name:'BrowserVersion',
  data() {
    return {
      browserInfo: {
        name: '',
        version: '',
      },
    };
  },
  created() {
    this.getBrowserInfo();
  },
  methods: {
    getBrowserInfo() {
      let userAgent = navigator.userAgent,
        name = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

      if (/trident/i.test(name[1])) {
        let tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        this.browserInfo.name = 'IE';
        this.browserInfo.version = tem[1] || '';
        return;
      }

      if (name[1] === 'Chrome') {
        let tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) {
          this.browserInfo.name = tem.slice(1)[0].replace('OPR', 'Opera');
          this.browserInfo.version = tem.slice(1)[1];
          return;
        }
      }

      name = name[2] ? [name[1], name[2]] : [navigator.appName, navigator.appVersion, '-?'];
      let tem = userAgent.match(/version\/(\d+)/i);
      if (tem != null) {
        name.splice(1, 1, tem[1]);
      }
      this.browserInfo.name = name[0];
      this.browserInfo.version = name[1];
    },
  },
};
</script>
<style scoped>
</style>