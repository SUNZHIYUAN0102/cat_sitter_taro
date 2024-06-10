import Taro from '@tarojs/taro'
import axios from 'axios'

export const baseURL = 'https://purrsitter.azurewebsites.net/'
const instance = axios.create({
    baseURL,
    timeout: 5000,
})

instance.interceptors.request.use(function (config) {
    let user = Taro.getStorageSync("user")
    if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error)
})

export default (url, method, submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}