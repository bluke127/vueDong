<template>
  <div id="app">
    <display
      :loading="loading"
      :user="user"
      :userIndex="index"
      @counting="setUser"
    >
    </display>
    <color> </color>
  </div>
</template>

<script>
import Display from "./components/display.vue";
import Color from "./components/color.vue";
import { getUser } from "./apis/user.js";

export default {
  components: { display: Display, color: Color },
  data() {
    return {
      loading: true,
      //유저의 정보만 담아주는 data값
      user: { name: "동우", age: 30, color: "blue" },
      //유저의 정보 풀
      userInfo: [
        { name: "동우", age: 30, color: "blue" },
        { name: "희철", age: 27, color: "green" },
        { name: "원우", age: 27, color: "gold" },
      ],
      //유저의 정보를 공간값으로 추출하기 위한 공간값 변수
      index: 0,
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    //유저의 필요한 정보를 추출
    setUser(index) {
      // //index를 length나눈 나머지가 0이면 무조건 동우, 1이면 희철, 2면 원우
      this.index = index % this.userInfo.length;
      // //질문사항 !!!!! 이걸 좀더 깔끔한 코드로 가능? 객체의 첫번째 키에 배열 0번째 값넣는,,
      // this.user.name = this.userInfo[this.index][0];
      // this.user.age = this.userInfo[this.index][1];
      // this.user.color = this.userInfo[this.index][2];
      // console.log(this.user, "000");

      this.user = this.userInfo[this.index];
    },
    //api활용 메서드(로딩 및 유저 정보를 넣어주는)
    async fetchUser() {
      try {
        console.log(this.user);
        console.log(this.user, await getUser(this.user));
        this.loading = true;
        const user = await getUser(this.user);
        this.user = user;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
