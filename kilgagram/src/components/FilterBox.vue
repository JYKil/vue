<template>
  <div @click="fire" :class="filter+' filter-item'" :style="`background-image:url(${이미지})`">
    <!-- {{filter}} -->
    <!-- html 에 직접 부모가 자식한테 줄 경우, 여러개 보내는 방법도 알아둘 것. 그러나 여러개는 props 가 좋음-->
    <slot></slot>
  </div> 
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire(){
      this.emitter.emit('clickFilter', this.filter);
    }
  },
  props : {
    이미지 : String,
    filter : String,
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>