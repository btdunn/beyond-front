<template>
  <div>
    <ul class="depart-list">
      <FlightOption />
    </ul>
  </div>
</template>

<script>
import FlightOption from "@/components/FlightOption"

export default {
  components: {
    FlightOption
  },
  mounted: function() {
    this.$store.dispatch('fetchFlights')
  }
}
</script>

<style scoped>

.depart-list{
  list-style: none;
}


</style>