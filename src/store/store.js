import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state : {
        num : 5
    },
    mutations : {
        increase(state){
            state.num++
        },
        decrease(state){
            state.num--
        }
    },
    getters:{
        
        getIncrease(state){
            return state.num=state.num+3
        },
    }
});

