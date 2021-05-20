<template>
  <div class="m-main">
    <button @click="handleLogout">退出</button>
  </div>
</template>

<script>
export default {
  layout: "light/main",
  head: {
    title: "小米书城-个人中心",
    meta: [
      { hid: "description", name: "description", content: "小米书城个人中心" },
      { hid: "Keywords", name: "Keywords", content: "小米书城,个人中心" }
    ]
  },   
  methods: {
    handleLogout() {
      this.$router.push('/')
    }
  },
  mounted() {
    this.$store.commit({ type: 'light/setState', key: 'header', value: '个人中心' })
  }   
};
</script>

<style>

</style>