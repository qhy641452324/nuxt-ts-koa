import axios from 'axios'
// 在进入页面前进行ajax请求

//测试
export default function ({ route }) {
    return axios.post('http://my-stats-api.com', {
        url: route.fullPath
    })
}
