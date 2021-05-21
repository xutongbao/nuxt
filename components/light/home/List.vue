<template>
  <div class="m-list" @scroll="handleScroll" ref="list">
    <Category
      v-for="category in list"
      :key="category.id"
      :category="category"
      @onTopArr="handleTopArr"
    ></Category>
    <Dialog
      :visible="isListDialogVisible"
      title="添加"
      @onClose="handleClose"
      @onOk="handleOk"
    >
      <template #content>
        <div class="m-add-wrap">
          <div class="m-add">
            <button class="m-btn" @click="handleSubCount">-</button>
            <input
              type="text"
              class="m-add-input"
              :value="addBook.count"
              @input="handleInputCount"
            />
            <button class="m-btn" @click="handleAddCount">+</button>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import useTools from '../../../utils/useTools'
let topArr = [];
let timer;
export default {
  computed: {
    list() {
      return this.$store.state.light.list;
    },
    currentId() {
      return this.$store.state.light.currentId;
    },
    addBook() {
      return this.$store.state.light.addBook;
    },
    isListDialogVisible() {
      return this.$store.state.light.isListDialogVisible;
    }
  },
  methods: {
    handleScroll(e) {
      let { scrollTop } = e.target;
      if (this.$store.state.light.isRealScroll) {
        const scrollTopNew = scrollTop + topArr[0];
        const index = topArr.findIndex(
          (top, index, arr) =>
            top <= scrollTopNew && scrollTopNew < arr[index + 1]
        );
        if (index !== this.$store.state.light.currentId) {
          this.$store.commit({
            type: "light/setState",
            key: "currentId",
            value: index
          });
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.$store.commit({
            type: "light/setState",
            key: "scrollTop",
            value: scrollTop
          });
        }, 300);
      } else {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.$store.commit({
            type: "light/setState",
            key: "isRealScroll",
            value: true
          });
          this.$store.commit({
            type: "light/setState",
            key: "scrollTop",
            value: scrollTop
          });
        }, 300);
      }
    },
    handleClose() {
      this.$store.commit({
        type: "light/setState",
        key: "isListDialogVisible",
        value: false
      });
    },
    handleTopArr(arr) {
      topArr = arr
    },
    async handleOk() {
      const addBook = this.$store.state.light.addBook;
      const { showLoading, hideLoading } = useTools();
      if (addBook.count !== "") {
        showLoading.bind(this)();
        this.$store.dispatch({ type: "light/addMyBooks", book: addBook }).then(() => {
          this.handleClose();
          hideLoading.bind(this)();
        });
      }
    },

    handleAddCount() {
      const addBook = {...this.$store.state.light.addBook}
      addBook.count++;
      this.$store.commit({
        type: "light/setState",
        key: "addBook",
        value: addBook
      });
    },

    handleSubCount() {
      const addBook = {...this.$store.state.light.addBook}
      if (addBook.count > 1) {
        addBook.count--;
        this.$store.commit({
          type: "light/setState",
          key: "addBook",
          value: addBook
        });
      }
    },

    handleInputCount(e) {
      const addBook = {...this.$store.state.light.addBook}
      addBook.count = e.target.value.replace(/[^\d]/g, "");
      if (addBook.count !== "") {
        addBook.count = parseInt(addBook.count);
      }
      this.$store.commit({
        type: "light/setState",
        key: "addBook",
        value: { ...addBook }
      });
    }
  },
  mounted() {
    this.$refs.list.scrollTop = this.$store.state.light.scrollTop;
  }
};
</script>

<style></style>
