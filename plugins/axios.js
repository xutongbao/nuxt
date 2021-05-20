export default function ({ $axios, redirect }) {
  const axios = $axios
  // 请求回调
  axios.onRequest((config) => {
    config.headers.token = `Bearer 1`
  })

  // 返回回调
  axios.onResponse((res) => {
    if (res.data.code === 200) {
      return res.data
    } else if (res.data.code === 400) {
      alert(res.data.message)
    } else {
      return Promise.reject(res)
    }
  })

  // 错误回调
  axios.onError((error) => {
    switch (error.response.status) {
      case 401:
        redirect('/')
        break
      case 500:
        redirect('/sorry')
        break
    }
  })
}
