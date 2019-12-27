<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <span>welcome </span>
      <ul>
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
    </ul>

    <ul>
      <li v-for="item in users" :key="item.name">{{item.name}}</li>
  </ul>

    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import axios from 'axios';

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      list: ['1', '2', '3']
    }
  },
  //https://segmentfault.com/a/1190000015325622
  //asyncData方法在组件初始化之前被调用，所以在方法内是没有办法通过this来引用组件的示例对象，
  //在asyncData方法中返回的数据直接赋值给了users，在页面中可以想使用data中的数据一样去使用users，从而达到服务端渲染的效果
  async asyncData ({ params, error }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return { 
      users: data.slice(0,5)
    }
  },
  async mounted() {
    let res = await axios.get('/list');
    console.log(res)
    this.list = res.data.list
  }
}
</script>

<style>
.container {
  /* min-height: 100vh; */
  display: flex;
  /* justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

