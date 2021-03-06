import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const Request = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URI,
  headers: {'X-Api-Key': process.env.VUE_APP_KEY}
})

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    headlines: '',
    search: '',
    error: '',
    loading: false
  },
  mutations: {
    setHeadlines(state, headlines){
      state.headlines = headlines
    },
    setSearch(state, search){
      state.search = search
    }
  },
  actions: {
    getHeadlines({commit, state}){
      state.headlines = ''
      state.loading = true
      state.error = ''
      Request({
        url: 'top-headlines?language=en'
      }).then(data => {
        state.loading = false
        commit('setHeadlines', data.data.articles)
      }).catch(error => {
        state.loading = false
        state.error = error
      })
    },
    getSearch({commit, state}, payload){
      state.search = '',
      state.loading = true
      state.error = ''
      Request({
        url: `everything?q=${payload.query}&sortBy=relevancy&page=${payload.page}&language=en&pageSize=5`
      }).then(data => {
        state.loading = false
        commit('setSearch', data.data.articles)
      }).catch(error => {
        state.loading = false
        state.error = error
      })
    }
  },
  getters: {
    headlines(state){
      return state.headlines
    },
    search(state){
      return state.search
    }
  }
})