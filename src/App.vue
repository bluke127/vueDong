<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
@import 'assets/style/fonts/stylesheet.css';
</style>
<style lang="scss">
@import 'assets/style/init.scss';
#app {
  font-family: NanumSquareB;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
</style>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  mounted() {},
  methods: {
    updateDate: function(d) {
      this.date = d;
    },
  },
};
</script>
