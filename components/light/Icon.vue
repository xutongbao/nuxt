<template>
  <span
    :class="`icon iconfont icon-${name} ${className}`"
    @click="handleClick"
  ></span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClick() {
      this.$emit("onClick")
    }
  },
}
</script>

<style></style>
