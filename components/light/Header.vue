<template>
  <div class="m-header">{{header}}</div>
</template>

<script>
export default {
  computed: {
    header() {
      return this.$store.state.light.header
    }
  }
}
</script>

<style>

</style>