import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.debug = true;
Vue.config.devtools = true;
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
/**뷰 인스턴스 설정 객체는 el, data 뿐아니라 랜더 속성도 있다!, createElement 같은 돔 생성 함수를
 * 인자로 주입 받는 함수가 render 함수!
 * 함수 h()에 컴포넌트 설정 객체를 넘겨주면 뷰 js는 컴포넌트를 화면에 그린다!
 */
