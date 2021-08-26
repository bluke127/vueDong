<template>
  <div>
    <div>트위터</div>
    <div>
      <label>로그인</label><input type="text" />
      <label>비밀번호</label><input type="text" />
      <div>{{number0}}</div>
      <button @click="setIncrease()">button +++</button>
      <button @click="setdecrease()">button ---</button>
      <button @click="trippleIncrease()">button +++++++++</button>
      <div>{{this.data}}</div>
        <!-- <div>{{this.$store.getter.getNumber}}</div> -->
      <!-- <div>{{this.$store.state.num}}</div>
      <div>{{this.$store.commit.printNumber}}</div> -->
    </div>
    <router-link to="/join">회원가입</router-link>
  </div>
</template>

<script>
import {a} from "./Join.vue"

export default {
  data(){
    return{
    number0:this.$store.state.num,
    data:""
    }
  },
  methods:{
    setIncrease(){
      this.$store.commit('increase');
      this.number0=this.$store.state.num
    },
    setdecrease(){
      this.$store.commit('decrease');
      this.number0=this.$store.state.num
    },
  },
  computed:{
    trippleIncrease(){
      this.$store.getters.getIncrease;
      this.number0=this.$store.state.num
    },
    
  }
}
</script>

<style>

</style>