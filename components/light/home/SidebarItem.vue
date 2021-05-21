<template>
  <div
    :class="`m-sidebar-item ${currentId === sidebarItem.id ? 'active' : ''}`"
    @click="handleNav(sidebarItem.id)"
  >
    {{ sidebarItem.title }}
  </div>
</template>

<script>
export default {
  props: {
    sidebarItem: {
      type: Object
    }
  },
  computed: {
    currentId() {
      return this.$store.state.light.currentId
    }
  },
  methods: {
    handleNav(id) {
      let el = document.getElementById(id)
      el.scrollIntoView({ block: 'start', behavior: 'smooth' })
      this.$store.commit({ type: "light/setState", key: "currentId", value: id })
      this.$store.commit({ type: 'light/setState', key: 'isRealScroll', value: false })      
    }
  },
}
</script>

<style></style>
