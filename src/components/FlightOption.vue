<template>
  <div>
    <ul>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        {{flight.departureTime }} -- {{flight.departureIata}} -- {{flight.arrivalTime}} -- {{flight.arrivalIata}} -- nonstop -- {{flight.flightNumber}}
        <button class="select">$65</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        {{flight.departureTime}} -- {{flight.departureIata}} -- {{flight.arrivalTime}} -- {{flight.arrivalIata}} -- nonstop -- {{flight.flightNumber}}
        <button class="select">$72</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        12:15:00 -- {{flight.departureIata}} -- 15:25:00 -- {{flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +5}}
        <button class="select">$110</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        13:25:00 -- {{flight.departureIata}} -- 16:35:00 -- {{flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +8}}
        <button class="select">$124</button>
      </li>
      <li v-for="flight in myFlight" :key="flight.flightNumber">
        14:25:00 -- {{flight.departureIata}} -- 17:34:00 -- {{flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +8}}
        <button class="select">$177</button>
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