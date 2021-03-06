// 封装http请求
import axios from 'axios'
import Toast from '@/components/toast/index.js'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 50000
})

http.interceptors.request.use(config => {
  // 请求头里面加入各种判断
  return config
}, error => {
  Toast(error)
  // 拦截请求错误
  Promise.reject(error)
})

http.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 0) {
    // 根据不同错误码进行提示
    Toast(res.message)
    Promise.reject(res.message)
  } else {
    return res
  }
}, error => {
  Toast(error)
  // 调用一个错误提醒dialog
  return Promise.reject(error)
})

export default http
