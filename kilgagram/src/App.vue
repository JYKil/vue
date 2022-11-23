<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step != 0" @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="stepPlus">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :게시물="게시물"
    :step="step"
    :이미지="이미지"
    @write="작성글 = $event"
  />
  <button v-if="step == 0" @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label v-if="step == 0" for="file" class="input-plus">+</label>
    </ul>
  </div>
  
  <!-- 각 components 에서 vuex 사용 방법 -->
  <!-- <h4>안녕 {{$store.state.name}} {{$store.state.age}}</h4> -->
  <!-- 하기와 같이 바로 state 변경이 가능하나, 어떤 components 수정했는지 알 수 없기에 직접 수정하지 않는다. -->
  <!-- <button @click="$store.state.name='길'">이게 되나??</button> -->
  <!-- 아래 코드 처럼 store 에게 부탁해서 변경하는 방향으로 진행해야함. -->
  <!-- <button @click="$store.commit('나이증가', 10)" >버튼</button> -->

  <!-- computed, mapState 테스트(mapMutation, mapActions도 있음) 근데 이거 Pinia 로 다 변경된 거 아닌가??  -->
  <!-- <p>{{nameComputed}} {{age}} {{name}} {{이름테스트}}</p> -->
</template>

<script>
import Container from "./components/Container";
import data from "./assets/data";
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      게시물: data,
      더보기: 0,
      이미지: "",
      작성글: "",
      선택한filter:"",
    };
  },
  mounted(){
    this.emitter.on('clickFilter', (a)=>{
      this.선택한filter = a;
      console.log(a);
    });
  },
  components: {
    Container,
  },
  // computed 에 함수 만들어서 store 내 state 를 가져오게 하여 소스량을 줄일 수 있다.
  // 각각 함수를 만들어서 호출하기가 귀찮다면 mapstate 를 사용하면 더욱 편하다.
  computed :{
    nameComputed(){
      return this.$store.state.name;
    },
    ...mapState(['name','age']),
    ...mapState({이름테스트:'name'})
  },
  methods: {
    stepPlus(){
      console.log("stepPlus");
      console.log(this.step);
      this.step++
      console.log(this.step);
    },
    publish() {
      console.log("publish");
      console.log(this.step);
      var 내게시물 = {
        name: "JaeYong",
        userImage: this.이미지,
        postImage: this.이미지,
        likes: 18,
        date: "May 15",
        liked: false,
        content: this.작성글,
        filter: this.선택한filter,
      };
      this.게시물.unshift(내게시물);
      this.step = 0;
      console.log(this.step);
    },
    upload(e) {
      console.log("upload");
      console.log(this.step);
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      this.이미지 = url;
      this.step = 1;
      console.log(this.step);
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
        // .then(function (result) {
        .then((result) => {
          this.게시물.push(result.data);
          if (this.더보기 < 1) {
            this.더보기++;
          } else {
            this.더보기=0;
          }
        });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
