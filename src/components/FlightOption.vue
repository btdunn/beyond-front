<template>
  <div>
    <ul>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        {{flight.departureTime }} -- {{flight.departureIata}} -- {{flight.arrivalTime}} -- {{flight.arrivalIata}} -- nonstop -- {{flight.flightNumber}}
        <button @click="seeMyFlight" class="select">$65</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        {{flight.departureTime}} -- {{flight.departureIata}} -- {{flight.arrivalTime}} -- {{flight.arrivalIata}} -- nonstop -- {{flight.flightNumber}}
        <button @click="seeMyFlight" class="select">$72</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        12:15:00 -- {{flight.departureIata}} -- 15:25:00 -- {{flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +5}}
        <button @click="seeMyFlight" class="select">$110</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        13:25:00 -- {{flight.departureIata}} -- 16:35:00 -- {{flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +8}}
        <button @click="seeMyFlight" class="select">$124</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        14:25:00 -- {{flight.departureIata}} -- 17:34:00 -- {{flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +8}}
        <button @click="seeMyFlight" class="select">$177</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    myFlight(){
      return this.$store.state.myFlight
    }
  },
  methods: {
    seeMyFlight(event){
      this.$router.push({name: 'Review'})
      const flight = event.path[1].innerText
      this.$store.dispatch('getFlightChoice', flight)
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}

li{
  justify-content: space-between;
  font-family: 'Source Code Pro', monospace;  
  font-size: 18pt;
  color: goldenrod;
  border: 1px white;
  padding: 20px;
  background-color: hsla(59, 58%, 12%, 1)
  /* background-color:rgb(170, 118, 22) */
}

.select{
  font-family: 'Source Code Pro', monospace;  
  background: wheat;
  padding: 10px;
  color: hsla(59, 58%, 12%, 1);
  opacity: 90%;
  border-radius: 50%;
}

.select{
  display: inline;
}

</style>