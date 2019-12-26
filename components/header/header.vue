<template>
    <div>
        <div class="header-menu">
            <nuxt-link to="/first/home" class="item"> header</nuxt-link>
            <nuxt-link to="/first/home" class="item"> header</nuxt-link>
            <nuxt-link to="/first/home" class="item"> header</nuxt-link>
            <nuxt-link to="/first/home" class="item"> header</nuxt-link>
        </div>
    </div>
</template>

<style>
    .header-menu{
        width: 100%;
        height: 35px;
        line-height: 35px;
        border: 1px solid #cccccc;
        display: flex;
    }
    .item{
        display: inline-flex;
        flex: auto;
    }
</style>