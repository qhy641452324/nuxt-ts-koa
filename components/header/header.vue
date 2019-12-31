<template>
    <div class="header-menu">
        <nuxt-link to="/first/home" class="item"> header</nuxt-link>
        <nuxt-link to="/first/home" class="item"> header</nuxt-link>
        <nuxt-link to="/first/home" class="item"> header</nuxt-link>
        <nuxt-link to="/first/home" class="item"> header</nuxt-link>
    </div>
</template>

<style scoped lang="less">
    .header-menu{
        a{
            text-decoration: none;
            color: tomato;
        }
        width: 100%;
        height: 35px;
        line-height: 35px;
        border: 1px solid #cccccc;
        background: #fff;
        display: flex;
    }
    .item{
        display: inline-flex;
        flex: auto;
        display: block;
        text-align: center;
    }
</style>