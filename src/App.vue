<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<style scoped>
  @import 'assets/css/init.css';
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  #app{font-family: 'Lato', sans-serif;}
</style>

<script>

export default {
  data() {
    return {
    date: null}
  },
  mounted() {
  },
  methods: {
    updateDate: function(d) {
      this.date = d;
    }
  },
};
</script>
