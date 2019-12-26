<template>
  <div class="main">
    <div class="layoutblock">
        <h1>firstlevel layout</h1> 
        <footer>这是一个自定义的用于一级页面的test模板</footer>
        <p>虚线以上是公共部分</p>
        <p>在需要引用layout的页面加入layout属性即可</p>
        <p>export default {</p>
            <p>layout: 'layoutname'</p>
        <p>}</p>

        <Button>this is a element</Button>
    </div>
    <nuxt/>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
    .main{
        border: 1px solid #ccc;
    }

    .layoutblock{
        border-bottom: 1px dashed cadetblue;
    }
</style>