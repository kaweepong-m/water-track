import Vue from "vue"
import Vuex from "vuex"
import Axios from 'axios'

let api_endpoint = "http://localhost:1337"

Vue.use(Vuex)

export default new Vuex.Store({
    // state เหมือน fields ใน oop
    state: {
      data: [],
    },
  
    getters: {
        water_rewards: (state) => state.data,
    },
  
    // mutations เหมือน private setter ใน oop
    // เอาไว้เปลี่ยนแปลงค่าใน state
    mutations: {
      fetch(state, { res }) {
        state.data = res.data
      },
      add(state, payload) {
        state.data.push(payload)
      },
      edit(state, index, data) {
        state.data[index] = data
      },
    },
  
    // actions เหมือน public methods ใน oop
    // ให้ภายนอก (component อื่น) เรียกใช้
    // หรือดึงค่าจากภายนอก เช่น API, server
    actions: {
      // commit เป็น keyword ไว้เรียก mutation
      async fetchwater({ commit }) {
        let res = await Axios.get(api_endpoint + "/water_rewards")
        commit("fetch", { res })
        },
    },

    modules: {},
  })