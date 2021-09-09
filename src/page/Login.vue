<template>
  <div id='wrap'>
    <div id='title'>Twitter<span><img :src="require('@/assets/image/logo.png').default" alt='logo'></span></div>
    <div id='context'>
      <span><label>Login </label><input type="text" @keypup="checkId()" v-model='formDate.idValue'/></span>
      <div class='warnMsg'><span v-if='errorFlag'>{{warnMsg}}</span></div>
      <span><label>Password</label><input type="text" @keypup="checkPass()" v-model='formDate.passValue'/></span>
      <div class='warnMsg'><span v-if='errorFlag'>{{warnMsg}}</span></div>
    </div>
    <router-link to="/join">회원가입</router-link>
  </div>
</template>
<style scoped>
  #wrap{min-width:200px; width:40%; margin:0 auto; height:50%; min-height:200px; color:aliceblue; text-align: center; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%)}
  #title{height:15vh; font-size:50px;}
  #title span{height:100%; overflow:hidden; display:inline-block; vertical-align: middle;} 
  #title img{height:70%; max-width:100%;} 
  #context{width:100%;}
  label{display:inline-block; width:30%; margin-right:5%; font-size:32px;}
  input{display:inline-block; width:40%; margin-bottom:5vh; font-size:32px;}
  #context span{display:block;}
  .warnMsg{heigth:5vh;}
</style>

<script>
import {a} from "./Join.vue"
// import logo from '../assets/image/logo.png'

export default {
  created(){alert(this.path(src))},
  data(){
    return{
      errorFlag:false,
      errorMsg:"",
      formDate:{
        id:'',
        idValue:'',
        pass:'',
        passValue:''
      }
    }
  },
  methods:{
    // setIncrease(){
    //   this.$store.commit('increase');
    //   this.number0=this.$store.state.num
    // },
    // setdecrease(){
    //   this.$store.commit('decrease');
    //   this.number0=this.$store.state.num
    // },
    checkId(){
      var idReg = /
    }
  },
  computed:{
    // trippleIncrease(){
    //   this.$store.getters.getIncrease;
    //   this.number0=this.$store.state.num
    // },
    
  }
}
</script>

<style>

</style>