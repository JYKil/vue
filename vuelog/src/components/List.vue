<template>
  <h4>Vue Routing 테스트를 위한 List</h4>
  <div v-for="(a, i) in 블로그글" :key="i">
    <!-- router-link 를 사용하면 a태그처럼 하이퍼링크 생성됨 -->
    <h5 @click="$router.push('/detail/'+i)">{{a.title}}</h5>
    <!-- <router-link :to="{ path: '/detail/' + i }">{{a.title}}</router-link> -->
    <p>{{a.date}}</p>
  </div>
</template>

<script>
export default {
  name : 'List',
  props: {
    블로그글 : Array,
  }
};
</script>

<style>
</style>