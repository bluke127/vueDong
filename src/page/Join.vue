<template>
  <div id="wrap">
    <div id="joinWrap">
      <ul>
        <li class="idLine">
          <label>아이디 :</label>
          <input type="text" @keyup="checkId()" v-model="id.idValue" />
          <div class="warnMsg">
            <span v-if="id.errorFlag">{{ id.errorMsg }}</span>
          </div>
        </li>
        <li class="passLine">
          <label>비밀번호</label><input type="text" @keyup="checkPass()" v-model="pass.passValue" />
          <div class="warnMsg">
            <span v-if="pass.errorFlag">{{ pass.errorMsg }}</span>
          </div>
        </li>
        <li class="passConfirmLine">
          <label>비밀번호 확인</label
          ><input type="text" @keyup="checkPassConfirm()" v-model="passConfirm.passConfirmValue" />
          <div class="warnMsg">
            <span v-if="passConfirm.errorFlag">{{ passConfirm.errorMsg }}</span>
          </div>
        </li>
        <li class="reasonLine">
          <label>가입경로</label
          ><input type="text" @keyup="checkPassConfirm()" v-model="reason.reasonValue" />
          <div class="warnMsg">
            <span v-if="reason.errorFlag">{{ pass.errorMsg }}</span>
          </div>
        </li>
        <li class="dateLine">
          <label>생년월일</label>
          <input type="text" @click="showCalendar()" readonly />{{ dateValue }}
          <Vcalendar
            style="z-index:2; position:absolute"
            v-model="date.date"
            @input="updateValue"
            mode="single"
            :formats="formats"
            :attributes="attributes"
            ref="calendar"
          >
          </Vcalendar>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { userInfo } from '@/apis/user.js';
import Vcalendar from 'v-calendar/lib/components/date-picker.umd';
export default {
  data() {
    return {
      attributes: [
        { key: 'today', highlight: true, content: 'red', dates: new Date() },
        {
          dot: {
            style: {
              backgroundColor: 'brown',
            },
            dates: [],
          },
        },
      ],
      dateValue: '',
      id: {
        id: '',
        idValue: '',
        errorFlag: false,
        errorMsg: '',
      },
      pass: {
        pass: '',
        passValue: '',
        errorFlag: false,
        errorMsg: '',
      },
      passConfirm: {
        passConfirm: '',
        passConfirmValue: '',
        errorFlag: false,
        errorMsg: '',
      },
      reason: {
        reason: '',
        reasonValue: '',
        errorFlag: false,
        errorMsg: '',
      },
      date: {
        date: new Date(),
        errorFlag: false,
        errorMsg: '',
      },
      formats: {
        title: 'MMMM YYYY',
        weekdays: 'W',
        navMonths: 'MMM',
        input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
        dayPopover: 'L',
        data: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
      },
    };
  },
  computed: {
    inputState() {
      if (!this.selectedValue) {
        return {
          type: 'is-danger',
          message: 'Date required.',
        };
      }
      return {
        type: 'is-primary',
        message: '',
      };
    },
  },
  watch: {},
  components: {
    Vcalendar,
  },
  mounted() {
    this.showCalendar();
  },
  methods: {
    ...mapState(['checkPop']),
    ...mapMutations(['CHECK_ID', 'SET_POP']),

    updateValue() {
      var moment = require('moment');

      this.dateValue = this.date.date;
      this.dateValue = moment(this.dateValue).format('yyyy-MM-DD');
      console.log(this.dateValue, this.$refs.navPopover);
      this.$refs.navPopover.display = 'none';
      return this.dateValue;
    },
    checkId() {
      var idReg = /^[A-za-z]/g;
      const check = userInfo.checkApi(idReg, this.id.idValue);
      if (check === 'wrong') {
        this.id.errorFlag = true;
        this.id.errorMsg = '시작을 영문으로 시작해주세요.';
        return false;
      } else if (check === 'empty') {
        this.id.errorFlag = true;
        this.id.errorMsg = '아이디를 입력해주세요';
        return false;
      }
      this.id.errorFlag = false;
      this.id.errorMsg = '';
      return true;
    },
    checkPass() {
      var passReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/;
      const check = userInfo.checkApi(passReg, this.pass.passValue);
      if (check === 'wrong') {
        this.pass.errorFlag = true;
        this.pass.errorMsg =
          '최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상으로 작성해주세요.';
        return false;
      } else if (check === 'empty') {
        this.pass.errorFlag = true;
        this.pass.errorMsg = '비밀번호를 입력해주세요';
        return false;
      }
      this.pass.errorFlag = false;
      this.pass.errorMsg = '';
      this.btnActive(this.id.errorFlag, this.pass.errorFlag);
      return true;
    },
    noneC() {
      this.$refs.calendar.$el.style.display = 'none';
    },
    showCalendar() {
      console.log(this.$refs.calendar.$el);
      console.log(this.$refs.calendar.$el.style.display);
      console.log(this);
      (function() {
        this.$refs.calendar.$el.style.display = 'none';
      })();
      return this.$refs.calendar.$el.style.display === 'none'
        ? (this.$refs.calendar.$el.style.display = 'block')
        : (this.$refs.calendar.$el.style.display = 'none');
    },
    updateDate(d) {
      this.date = d;
    },
  },
};
</script>

<style lang="scss" scoped>
#wrap {
  #joinWrap {
    width: 50%;
    margin: 30px auto 0;
    overflow: hidden;
    background: #fff;
    text-align: center;
  }
  ul {
    width: 70%;
    margin: 30px auto;
    overflow: hidden;
    li {
      height: 60px;
      label {
        width: 40%;
        display: inline-block;
      }
      input {
        background-color: lightblue;
      }
    }
  }
}
.vc-header {
  background: red;
}
</style>
