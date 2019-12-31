<template>
  <section>
    <div class="container">
      <div v-swiper:mySwiper="swiperOption" class="my-swiper">
        <div class="swiper-wrapper">
          <div  class="swiper-slide"><img src="../assets//images/banner12.jpg"></div>
          <div  class="swiper-slide"><img src="../assets//images/banner12.jpg"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>

      <div id="testdom"></div>

      <ul class="infolist">
        <li>这是测试从koa后端包出来的接口:</li>
        <li v-for="(item, index) in list" :key="index">
          {{item}}
        </li>
      </ul>

    <ul class="userlist">
      <li>这里测试的是服务器渲染:</li>
      <li v-for="item in users" :key="item.name">{{item.name}}</li>
    </ul>

    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import AppLogo from '~/components/AppLogo.vue';
import axios from 'axios';

export default {
  head(){
    return {
      title:'首页index'
    }
  },
  components: {
    AppLogo
  },
  data() {
    return {
      list: ['1', '2', '3'],
      swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
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
    setTimeout(() => {
        this.asyncCount = 5
    }, 1000);
    let res = await axios.get('/list');
    this.list = res.data.list;
    $("#testdom").text('there is a test for Jquery') 
  }
}
</script>

<style lang="less">
// 引入全局的css样式
@import "../assets/css/main.less";

.my-swiper {
    height: 180px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }

.container {
  // width: 96%;
  margin: 0 auto;
  overflow: hidden;
  pre{
    margin: 0 .5rem;
  }
  .txt{
    font-size: 12px;
    color: #35495e;
    padding: 0 5px;
  }
  #testdom{
    color: salmon;
    font-weight: bold;
    margin: 10px;
  }
  .userlist{
    display: block;
    margin: 10px 0;
    li{
      list-style: none;
      color: mediumseagreen;
    }
  }
  .infolist{
    font-size: 12px;
    color: #526488;
  }
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

