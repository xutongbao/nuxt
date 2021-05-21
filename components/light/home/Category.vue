<template>
  <div :id="category.id" class="js-category">
    <div class="m-category-title">
      {{ category.title }}
    </div>
    <CategoryItem
      v-for="book in category.list"
      :key="book.id"
      :book="book"
    ></CategoryItem>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object
    }
  },
  updated() {
    console.log('子组件更新')
    let topArr = [...document.getElementsByClassName("js-category")].map(
      item => item.offsetTop
    );
    topArr.push(Infinity);
    this.$emit("onTopArr", topArr);
  },
  mounted() {
    console.log("子组件挂载完");
    let topArr = [...document.getElementsByClassName("js-category")].map(
      item => item.offsetTop
    );
    topArr.push(Infinity);
  }
};
</script>

<style></style>
