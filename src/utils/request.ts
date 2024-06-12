import Taro from '@tarojs/taro'
import axios from 'axios'

export const baseURL = 'http://localhost:3000/'
const instance = axios.create({
    baseURL,
    timeout: 5000,
})

instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

export default (url, method, submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}