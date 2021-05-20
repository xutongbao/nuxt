import axios from "axios"

// const api = axios.create({
//   headers: {
//     common: {
//       Accept: 'text/plain, */*'
//     }
//   }
// })

// // Set baseURL to something different
// api.setBaseURL('http://localhost:81')
export const common = async (config) => {
  let res = await axios(config)
  return res
}
