import urls from '../../utils/urls'

export default {
  async getList({ commit }) {
    const res = await this.$axios.get(urls.light.list)
    commit({ type: 'setState', key: 'list', value: res.data })
  },
}
