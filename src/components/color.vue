<template>
  <div>
    <div class="color" :style="{ backgroundColor: colorStyle }"></div>
  </div>
</template>

<script>
import { EventBus } from "../apis/eventBus.js";
export default {
  data() {
    return {
      //user.color를 담아줄 데이터값
      colorStyle: "",
    };
  },
  created() {
    //이벤트버스를 이용해 형제간 데이터 이동
    EventBus.$on("color", (color) => {
      this.colorStyle = `${color}`;
    });
  },
};
</script>
<style>
.color {
  height: 150px;
}
</style>
