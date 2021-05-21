<template>
  <div class="m-category-item">
    <img
      :alt="book.title"
      :src="book.avatar"
      lazy
      class="m-category-item-img"
      @click="handleImageClick(book.id)"
    />
      <!-- <template #placeholder>
        <div class="m-category-item-img-loading"></div>
      </template> -->
    <div class="m-category-item-info">
      <div>{{ book.title }}</div>
      <Stars :number="book.stars" />
      <div class="m-book-price">￥{{ book.price }}</div>
      <button @click="handleShowDialog">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object
    }
  },
  methods: {
    handleShowDialog() {
      this.$store.commit({
        type: "light/setState",
        key: "isListDialogVisible",
        value: true
      });
      const book = this.$props.book;
      book.count = 1;
      this.$store.commit({
        type: "light/setState",
        key: "addBook",
        value: book
      });
    },
    handleImageClick(id) {
      this.$router.push(`/light/detail/${id}`);
    }
  }
};
</script>

<style></style>
