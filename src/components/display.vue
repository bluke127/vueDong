<template>
  <div>
    <span v-if="loading">...loading</span>
    <div v-else>
      <div>
        <span>{{ `안녕하세요 ${user.name}이고 ${user.age}살입니다` }}</span>
        <button @click="onClick(user.color)">{{ user.color }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../apis/eventBus.js";

export default {
  //user 부모에서 받아온 유저 정보
  props: { user: Object, loading: Boolean, userIndex: Number },

  methods: {
    //클릭할때마다 색깔이 변하고 이름도 변하게 만들어주는 이벤트 제공(정보의 변화는 숫자를 통해서)
    onClick(color) {
      if (this.loading) {
        alert("불러오는중");
        return;
      } else {
        console.log(color, "!!!!!!!!!!");
        const index = this.userIndex + 1;
        console.log(index, "!!!!!#");
        EventBus.$emit("color", color);
        this.$emit("counting", index);
      }
    },
  },
};
</script>
