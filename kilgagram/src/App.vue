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

</template>

<script>
import Container from "./components/Container";
import data from "./assets/data";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      게시물: data,
      더보기: 0,
      이미지: "",
      작성글: "",
    };
  },
  components: {
    Container,
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
        filter: "perpetua",
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
            this.더보기 = 0;
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
