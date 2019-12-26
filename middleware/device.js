// 在每进入一个页面前都会执行这个函数，接收上下文作为参数，这里是判断当前设备是PC还是移动端
export default function (context) {
    context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
    let userAgent = context.userAgent
    let device = userAgent.match(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i) ? 'phone' : 'pc'

    return device
}
