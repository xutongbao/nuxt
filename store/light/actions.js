import Api from "../../api"

export default {
  async getList({ commit }) {
    const res = await Api.light.list()
    commit({ type: 'setState', key: 'list', value: res.data })
  },
  async getMyBooks({ commit }) {
    const res = await Api.light.myBooks()
    commit({ type: 'setState', key: 'myBooks', value: res.data })
  },
  async addMyBooks({ commit }, payload) {
    const { book } = payload
    const res = await Api.light.myBooks({ book }, 'post')
    commit({ type: 'setState', key: 'myBooks', value: res.data }) 
    return res   
  },
  async deleteMyBooks({ commit }, payload) {
    const { ids } = payload
    const res = await Api.light.myBooks({ ids }, 'delete')
    commit({ type: 'setState', key: 'myBooks', value: res.data }) 
    return res  
  },
  async patchMyBooks({ commit }, payload) {
    const res = await Api.light.myBooks({ ...payload }, 'patch')
    commit({ type: 'setState', key: 'myBooks', value: res.data }) 
    return res  
  },
  async getDetail({ commit }, payload) {
    const res = await Api.light.detail(payload.id)
    res.data.count = 1
    commit({ type: 'setState', key: 'detailBook', value: res.data })
  }
}
