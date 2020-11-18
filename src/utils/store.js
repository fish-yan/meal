import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        that: null,
        pubParams: {
            contentType: "application/json",
            opSys:"0",
            characterSet:"GBK",
            sys_cnl:"app",
            version: "",
            token_id: "",
            oper_no:""
        },
        mercStoreListIndex:0,
    },
    mutations: {
        setPubParams(state, params) {
            state.pubParams = params
        },
        setMercStoreListIndex(state, index) {
            state.mercStoreListIndex = index
        }
    },
})
export default store