<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@import 'assets/style/init.scss';
#app {
  label {
    font-family: 'Raleway', sans-serif;
  }
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
