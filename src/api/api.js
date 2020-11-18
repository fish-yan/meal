import axios from 'axios'
import config from '../config/index'

export const API = {
    mercQryBanknm: "mercQryBanknm", // 查询银行列表
}
import store from "../utils/store"
export default {
    request(api, data){
        var pubParams = store.state.pubParams
        pubParams.contentType = "application/json"
        pubParams.characterSet = "GBK"
        if (data != null) {
            data = Object.assign(data,pubParams)
        } else {
            data = pubParams
        }
        return axios({
            method: "post",
            baseURL: config.baseUrl,
            url: api,
            data: data,
            contentType: "application/json;charset=utf-8",
        })
    }
}
