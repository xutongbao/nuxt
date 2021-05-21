export default function ({ $axios, redirect }, inject) {
  if (process.env.NODE_ENV === "development") {
    $axios.setBaseURL('http://localhost:81')
  } else {
    $axios.setBaseURL('https://rough-tan-board.glitch.me')
  }

  // 请求回调
  $axios.onRequest((config) => {
    if (process.client) {
      config.headers.token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    }
  })

  // 返回回调
  $axios.onResponse((res) => {
    if (res.data.code === 200) {
      return res.data
    } else if (res.data.code === 400) {
      alert(res.data.message)
    } else {
      return Promise.reject(res)
    }
  })

  // 错误回调
  $axios.onError((error) => {
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
