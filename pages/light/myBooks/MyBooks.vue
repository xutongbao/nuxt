<template>
  <div class="m-main">书包</div>
</template>

<script>
export default {
  layout: "light/main",
  head: {
    title: "小米书城-书包",
    meta: [
      { hid: "description", name: "description", content: "小米书城书包" },
      { hid: "Keywords", name: "Keywords", content: "小米书城,书包" }
    ]
  },   
  mounted() {
    this.$store.commit({ type: 'light/setState', key: 'header', value: '书包' })
  }
};
</script>

<style>

</style>