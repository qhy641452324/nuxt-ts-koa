<template>
    <div>
        <h1>姓名：{{info.name}}</h1>
        <h2>年龄：{{info.age}}</h2>
        <h2>兴趣：{{info.interest}}</h2>
        <p><nuxt-link to='/'>Home</nuxt-link></p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: 'muzidigbig',
        }
    },
    //方式一(await)
    // async asyncData(context) {
    //     console.log(await axios.get('https://api.myjson.com/bins/1dkbio')) 
    //     let {data} = await axios.get('https://api.myjson.com/bins/1dkbio') 
    //     return {info:data}
    //     error(params)//当请求错误时直接跳转到错误页面(放在返回值之后)
    // },
    //方式二
    asyncData ({ params }) {//请求
	return  axios({
	    method: 'get',
	    url: 'https://api.myjson.com/bins/1dkbio'
	})
	.then(function (response) {
            console.log(response.data)
            return { info: response.data};
            error(params)
        })
    },
}
</script>
