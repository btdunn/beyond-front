<template>
  <div>
    <ul class="outerUl">
      <ul v-for="flight in myFlight" :key="flight.flightNumber">
        <li>{{flight.departureTime }}</li> <li>{{flight.departureIata}}</li> <li>{{flight.arrivalTime}}</li> <li>{{flight.arrivalIata}}</li> <li>nonstop</li> <li>{{flight.flightNumber}}</li>
        <button @click="seeMyFlight" class="selectf">$65</button>
      </ul>
      <ul v-for="flight in myFlight" :key="flight.flightNumber">
        <li>{{flight.departureTime }}</li> <li>{{flight.departureIata}}</li> <li>{{flight.arrivalTime}}</li> <li>{{flight.arrivalIata}}</li> <li>nonstop</li> <li>{{flight.flightNumber}}</li>
        <button @click="seeMyFlight" class="selectf">$72</button>
      </ul>
      <ul v-for="flight in myFlight" :key="flight.flightNumber">
        <li>12:15:00</li> <li>{{flight.departureIata}}</li> <li>15.25.00</li> <li>{{flight.arrivalIata}}</li> <li>nonstop</li> <li>{{+flight.flightNumber+5}}</li>
        <button @click="seeMyFlight" class="select">$110</button>
      </ul>
      <ul v-for="flight in myFlight" :key="flight.flightNumber">
        <li>13:25:00</li> <li>{{flight.departureIata}}</li> <li>16:35:00</li> <li>{{flight.arrivalIata}}</li> <li>nonstop</li> <li>{{+flight.flightNumber+8}}</li>
        <button @click="seeMyFlight" class="select">$124</button>
      </ul>
      <ul v-for="flight in myFlight" :key="flight.flightNumber">
        <li>14:25:00</li> <li>{{flight.departureIata}}</li> <li>17:34:00</li> <li>{{flight.arrivalIata}}</li> <li>nonstop</li> <li>{{+flight.flightNumber+9}}</li>
        <button @click="seeMyFlight" class="select">$177</button>
      </ul>
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
      const flight = {
        departure: event.path[1].childNodes[0].innerText,
        from: event.path[1].childNodes[2].innerText,
        arrival: event.path[1].childNodes[4].innerText,
        to: event.path[1].childNodes[6].innerText,
        type: event.path[1].childNodes[8].innerText,
        flight: event.path[1].childNodes[10].innerText,
        cost: event.path[1].childNodes[11].innerText
      }
      this.$store.dispatch('getFlightChoice', flight)
    }
  }
}
</script>

<style scoped>

.outerUl{
  list-style: none;
  padding: 0px;
}

ul{
  list-style: none;
  background-color: hsla(37, 52%, 22%);
  border-radius: 10px;
}

li{
  justify-content: space-between;
  font-family: 'Source Code Pro', monospace;  
  font-size: 18pt;
  color: hsl(57, 91%, 65%);
  padding: 10px;
  display: inline-block;
  padding: 20px;
}

.select{
  font-family: 'Source Code Pro', monospace;  
  background: hsl(57, 91%, 65%);
  padding: 10px;
  color: hsla(37, 52%, 22%);
  opacity: 90%;
  border-radius: 50%;
  display: inline;
  margin-left: 8px;
  margin-right: 8px;
}

.selectf{
  font-family: 'Source Code Pro', monospace;  
  background: hsl(57, 91%, 65%);
  padding: 14px;
  color: hsla(37, 52%, 22%);
  opacity: 90%;
  border-radius: 50%;
  display: inline;
  margin-left: 8px;
  margin-right: 10px;
}

</style>