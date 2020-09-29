import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flights: [],
    searchedFlight: [],
    myFlight: [],
    flightChoice: [],
  },
  mutations: {
    setFlights(state, data){
      state.flights = data
      return state
    },
    setSearchedFlight(state, selections){
      state.searchedFlight = selections
      return state
    },
    setShowFlight(state){
      let foundFlights = state.flights.filter((flight) => {
        return (
          flight.departureIata == state.searchedFlight.departure &&
          flight.arrivalIata == state.searchedFlight.arrival
        )
      })
      state.myFlight = foundFlights
      return state
    },
    setFlightChoice(state, flight){
      state.flightChoice = flight
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
    },
    showFlights({ commit }){
      commit("setShowFlight")
    },
    getFlightChoice({ commit }, flight){
      commit("setFlightChoice", flight)
    }
  },
  modules: {
  }
})
