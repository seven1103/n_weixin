/**
 * 精准云帮扶微信端接口文件
 * author:seven
 * date:2018.1.3
 */
import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'

//axios配置

//超时时间
axios.defaults.timeout = 5000
axios.defaults.headers = {'X-Region-Id': 520599000000}
//拦截器设置
//http请求拦截
axios.interceptors.request.use(config => {
    Indicator.open({
        text:'加载中...',
        spinnerType:'fading-circle'
    })
    return config
},error => {
    Toast('加载超时')
    return Promise.reject(error)
})

//http响应拦截器
axios.interceptors.response.use(data => {
    Indicator.close()
    return data
},error => {
    Indicator.close()
    Toast('服务器报错:' + error)
    return Promise.reject(error)
})

//api接口
const HOST = '/api/api'
//地区类
/**
 * @desc 获取地区列表
 * @type GET
 */
export const regions = params => { return axios.get(`${HOST}/misc/regions/`,params).then(res => res.data)};