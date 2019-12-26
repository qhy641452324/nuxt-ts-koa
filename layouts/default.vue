<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <v-tab></v-tab>
    <nuxt/>
  </div>
</template>

<script>
  import axios from 'axios';
  // 引入组件
  import header from "~/components/header/header.vue";
  import tab from "~/components/tab/tab.vue";
  export default {
    data:function(){
      return {
        seller:{}
      }
    },
    created:function(){
    },
    components:{
      "v-header":header,
      "v-tab":tab
    }
  }
</script>

<style lang="scss" rel="text/css">

</style>
