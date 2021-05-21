import urls from '../../utils/urls'

export default {
  async getList({ commit }) {
    const res = await this.$axios.get(urls.light.list)
    commit({ type: 'setState', key: 'list', value: res.data })
  },
  // async getMyBooks({ commit }) {
  //   const res = await Api.light.myBooks()
  //   commit({ type: 'setLightState', key: 'myBooks', value: res.data })
  // },
  async addMyBooks({ commit }, payload) {
    const { book } = payload
    const res = await this.$axios.post(urls.light.myBooks, { book })
    commit({ type: 'setState', key: 'myBooks', value: res.data }) 
    return res   
  },  
}
