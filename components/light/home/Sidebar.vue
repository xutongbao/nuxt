<template>
  <div class="m-sidebar">
    <SidebarItem
      v-for="sidebarItem in list"
      :key="sidebarItem.id"
      :sidebarItem="sidebarItem"
    >
    </SidebarItem>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.light.list
    }
  }
}
</script>

<style></style>
