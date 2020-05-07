import axios from 'axios'
import Qs from 'qs'
import { sign } from '@/utils/auth'
import { message } from 'antd'
import Origin from '@/utils/origin'

// const origin = window.location.origin
// const token = localStorage.getItem('token')
// 根据环境获取不同的baseUrl
let baseUrl = Origin.BaseURL
// console.log('baseUrlorigin', baseUrl)
// console.log('baseurl', baseUrl)
// console.log('env', process.env)
// if (origin.indexOf('localhost') > -1) {
//   baseUrl = "http://web.dev-idesk.com/api";
// } else if (origin.indexOf('xxxx') > -1) {
//   // baseUrl = '';
// } else if (origin.indexOf('xxxx') > -1) {
//   // baseUrl = '';
// }
// console.log('baseUrl', baseUrl)

const res_dispose = data => {
  switch (data.repCode) {
    case '0000':
      break
    default:
      message.error(data.repMsg, 1)
      break
  }
  return data
}

const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 15000 // 请求超时时间
})

//请求拦截
service.interceptors.request.use(
  config => {
    // console.info('请求开始');
    //   Toast.loading("请求中...");
    if (config.headers['Content-Type'] === 'text/plain') return config
    if (config.data) {
      // excel文件导入
      if (config.data.get) return config
    }
    config.data = sign(config.data)
    return config
  },
  error => {
    // 对响应错误做点什么
    console.error(error)
    return Promise.reject(error)
  }
)

//响应拦截
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // console.info('请求结束');
    //   Toast.hide();

    const data = response.data
    res_dispose(data)
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

const ajax = param => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [
      data => {
        const param = Qs.stringify(data)
        return param
      }
    ],
    ...param
  }
  //请求参数转换
  if (config.method === 'get' || !config.method) {
    config.params = config.data
    delete config.data
  }
  return service(config)
}

const ajax_json = param => {
  const config = {
    ...param
  }
  //请求参数转换
  if (config.method === 'get' || !config.method) {
    config.params = config.data
    delete config.data
  }
  return service(config)
}
export { ajax, ajax_json }
