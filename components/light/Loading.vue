<template>
  <div :class="`m-loading ${ isLoading ? 'active' : '' }`">

  </div>
</template>

<script>
export default {
  computed: {
    isLoading(){
      return this.$store.state.light.isLoading
    }
  }
}
</script>

<style>

</style>