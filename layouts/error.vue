<template>
  <div>
    <div class="container">
    <h1 v-if="error.statusCode === 404" class="error">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link class="resetPage" to="/">首 页</nuxt-link>
  </div>
</div>
</template>


<script>
export default {
  props: {
    error: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  // layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>

<style>
    /* .error{
        font-size: 20px;
        padding: 10px 30px;
     }
     .resetPage{
        color: "#3b8070";
        font-size: 20px;
     } */
</style>


