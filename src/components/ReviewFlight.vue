<template>
  <div class="ticket">
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
    <ul class="labels">
      <li>Departure:</li>
      <li>From:</li>
      <li>Arrival:</li>
      <li>To:</li>
      <li>Type:</li>
      <li>Flight #:</li>
      <li>Cost:</li>
    </ul>
    <p>
    {{flightChoice}}
    </p>
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