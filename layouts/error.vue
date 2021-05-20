<template>
  <div>
    <h1 v-if="error.statusCode === 404">404 没有找到该页面</h1>
    <h1 v-else>出错了</h1>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
