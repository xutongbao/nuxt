export default () => {
  let timer;

  const showLoading = function(delay = 0) {
    timer = setTimeout(() => {
      this.$store.commit({
        type: "light/setState",
        key: "isLoading",
        value: true
      });
    }, delay);
  };

  const hideLoading = function() {
    clearTimeout(timer);
    this.$store.commit({
      type: "light/setState",
      key: "isLoading",
      value: false
    });
  };

  return {
    showLoading,
    hideLoading
  };
};
