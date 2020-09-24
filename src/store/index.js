import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flights: [],
    searchedFlight: [],
  },
  mutations: {
    setFlights(state, data){
      state.flights = data
      return state
    },
    setSearchedFlight(state, selections){
      state.searchedFlight = selections
      return state
    }
  },
  actions: {
    fetchFlights({ commit }){
      const url = 'http://localhost:4000/'
      fetch(url)
        .then(response => response.json())
        .then(response => {
          commit("setFlights", response.data)
        })
    },
    getFlightSearch({ commit }, selections){
      commit("setSearchedFlight", selections)
    }
  },
  modules: {
  }
})
