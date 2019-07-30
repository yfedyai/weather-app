import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkWeekTab: null,
    weather: null,
    citiSearch: null

  },
  mutations: {
    setTabFlag (state, payload) { state.checkWeekTab = payload },
    setWeather (state, payload) { state.weather = payload },
    citiSearch (state, payload) { state.citiSearch = payload }

  },
  actions: {
    async searchLocation ({ commit }, payload) {
      try {
        const citуWeather = await axios.get(`${process.env.VUE_APP_URL}&q=${payload}&days=7`)
        commit('setWeather', citуWeather.data)
      } catch (err) {
        console.log(err)
        throw err
      }
    }
  }

})
