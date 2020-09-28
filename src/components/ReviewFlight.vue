<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
    <div class="ticket">
      <p>
      {{flightChoice}}
      </p>
    </div>
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
  }

  .ticket{
    display: flex;
    justify-content: center;
    width: 45%;
  }
</style>