<template>
  <div>
    <nav>
    <form @submit.prevent="submitForm">
      <label class='input-label' for='from'>Departing From...</label>
      <input v-model="departure" type='text' name='from' alt='Departing From...'>
      <label class='input-label' for='fromDate'>Departure Date</label>
      <input v-model="ddate" type='date' name='fromDate' alt='Departure Date'>
      <label class='input-label' for='to'>Arriving In...</label>
      <input v-model="arrival" type='text' name='to' alt='Arriving In...'>
      
      <input class='submit-button' type='submit' value='Fly'>
    </form>
    </nav>
  </div>
</template>

<script>

export default {
  data(){
    return {
        departure: "",
        ddate: "",
        arrival: "",
    }
  },
  methods: {
    submitForm(){
      this.$emit("submit", {
        departure: this.departure,
        ddate: this.ddate,
        arrival: this.arrival,
      })
    }
  }
}
</script>

<style scoped>
nav{
  position: absolute;
	background-image: url(https://i.imgur.com/3uMBlTk.jpg) ;
	height: 100vh;
	width: 60vh;
}

.input-label{
	color: hsl(37, 52%, 22%);
	font-family: 'Righteous', cursive;
	font-size: 20pt;
	-webkit-text-stroke: 1px whitesmoke;
}

form{
	display: flex;
	margin-top: 60px;
	flex-direction: column;
	padding: 5em;
}

input{
	border: 2px solid hsl(14, 71%, 48%);
  border-radius: 25px;
	padding: 10px;
  margin-bottom: 16px;
  color: hsl(37, 52%, 22%);
}

.radio{
	flex-direction: column;
	margin-left: 115px;
	margin-right: auto;
}

.submit-button{
	background: hsl(14, 71%, 48%);
	opacity: 90%;
	font-family: 'Righteous', cursive;
  color: whitesmoke;
  font-size: 18pt;
}

</style>