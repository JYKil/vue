<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueLog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/list">List</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Detail</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <div class="container mt-4">
    <h5>Routing 테스트를 위한 개발자 블로그</h5>
    <p>- Vue로 만들었음 -</p>
  </div> -->
  <router-view :블로그글="블로그글"></router-view> 
  <!-- <List :블로그글="블로그글"/> -->
</template>

<script>
//import List from './components/List.vue';
import blog from './assets/blog.js'

export default {
  name: "App",
  // 원래 blog.js 내용을 넣을려다가 import 함
  data(){
    return{
      블로그글: blog
    }
  }, 
  components: {
    // List : List,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
