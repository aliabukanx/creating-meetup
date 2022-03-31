// import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter:0,
    meetups: [],
    meetup: {}
  },
  mutations: {
    SET_COUNTER (state, newCount) {
     state.counter= newCount      
    },
    SET_MEETUPS (state, data) {
      state.meetups= data  
    },
    SET_MEETUP (state, data) {
      state.meetup= data  
    },
  },
  actions: {
    incrementCounter ({ commit, state}){
      const newCount = state.counter +1
      commit('SET_COUNTER', newCount)
    },
    async fetchMeetups({ commit }) {
      const result = await axios.get('http://localhost:3000/meetup/all/json')
      commit('SET_MEETUPS', result.data)
    },
    async fetchMeetup({ commit }, id) {
      const result = await axios.get(`http://localhost:3000/meetup/${id}/json`)
      commit('SET_MEETUP', result.data)
    },
    
  },
  modules: { 
  }
})
