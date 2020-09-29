<template>
  <div class="ticket">
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
    <ul class="labels">
      <li>Departure: {{flightChoice.departure}}</li>
      <li>From: {{flightChoice.from}}</li>
      <li>Arrival: {{flightChoice.arrival}}</li>
      <li>To: {{flightChoice.to}}</li>
      <li>Type: {{flightChoice.type}}</li>
      <li>Flight #: {{flightChoice.flight}}</li>
      <li>Cost: {{flightChoice.cost}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    flightChoice(){
      return this.$store.state.flightChoice
    }
  }
}
</script>

<style scoped>

  p{
    font-family: 'Source Code Pro', monospace;  
    font-size: 18pt;
    color: wheat;
    text-align: right;
    align-self: flex-end;
  }

  ul{
    list-style: none;
    font-family: 'Source Code Pro', monospace;  
    font-size: 18pt;
    color: wheat;
    text-align: left;
  }

  .ticket{
    display: flex;
    justify-content: center;
    align-content: space-between;
    width: 100%;
  }
</style>