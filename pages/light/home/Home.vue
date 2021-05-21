<template>
  <div class="m-main m-home">
    <Sidebar></Sidebar>
    <List></List>
  </div>
</template>

<script>
export default {
  layout: "light/main",
  head: {
    title: "小米书城-首页",
    meta: [
      { hid: "description", name: "description", content: "小米书城首页" },
      { hid: "Keywords", name: "Keywords", content: "小米书城,首页" }
    ]
  },
  async fetch() {
    this.$store.commit({
      type: "light/setState",
      key: "header",
      value: "小米书城"
    });
    await this.$store.dispatch({ type: "light/getList" })
  }
  // async asyncData({ $axios }) {
  //   const res = await $axios.$get("http://localhost:81/api/list");
  //   console.log(res)
  // }
};
</script>

<style></style>
