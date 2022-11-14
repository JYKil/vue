<template>
  <h4>Vue Routing 테스트를 위한 Detail</h4> 
  <div>
    <h5>{{ 블로그글[$route.params.id].title}}</h5>
    <p>{{ 블로그글[$route.params.id].content}}</p>
    <!-- router 가 아닌 modal 로도 구현 가능 -->  
    <router-view></router-view>
    <button @click="$router.push('/detail/0/author')">작가소개</button>
    <button @click="$router.go(-1)">뒤로 가기</button>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    블로그글: Array,
  },
};
</script>

<style>
</style>