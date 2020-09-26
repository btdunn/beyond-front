<template>
  <div>
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
      13:25:00 -- {{flight.departureIata}} -- 16:35:00 -- {{+flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +8}}
      <button class="select">$124</button>
    </li>
    <li v-for="flight in myFlight" :key="flight.flightNumber">
      14:25:00 -- {{flight.departureIata}} -- 17:34:00 -- {{flight.arrivalIata}} -- nonstop -- {{+flight.flightNumber +8}}
      <button class="select">$177</button>
    </li>
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
li > p{
  display: inline;
  padding: 80px;
	font-family: 'Righteous', cursive;
  color: whitesmoke
}

.select{
  display: inline;
}

</style>