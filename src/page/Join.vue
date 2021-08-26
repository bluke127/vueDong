<template>
  <div>생년월일 : <p>{{date}}</p> <Datepicker @selected="updateDate" v-once></Datepicker></div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Vue from "vue"
export default {
  data: function () {
    return {
      date: null,
      marvel:"iron"
      };
  },
  
  components: {
    Datepicker
  },
   methods: {
    updateDate(d) {
      this.date = d;
    }
  }
}
</script>

<style>

</style>