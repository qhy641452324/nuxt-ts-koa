<template>
        <div class="header-tab">
            <nuxt-link to="/first" class="item"> tab1</nuxt-link>
            <nuxt-link to="/first" class="item"> tab2</nuxt-link>
            <nuxt-link to="/first" class="item"> tab3</nuxt-link>
            <nuxt-link to="/first" class="item"> tab4</nuxt-link>
        </div>
</template>

<style scoped  lang="less">
    .header-tab{
        width: 100%;
        height: 35px;
        line-height: 35px;
        border: 1px solid #cccccc;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #ffffff;
        z-index: 99;
        .item{
            display: inline-flex;
            flex: auto;
            display: block;
            text-align: center;
        }
    }
    
</style>