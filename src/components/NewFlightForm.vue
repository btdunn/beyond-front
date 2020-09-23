<template>
  <div>
    <nav>
    <form>
      <label class='input-label' for='from'>Departing From...</label>
      <input type='text' name='from' alt='Departing From...'>
      <label class='input-label' for='fromDate'>Departure Date</label>
      <input type='date' name='fromDate' alt='Departure Date'>
      <label class='input-label' for='to'>Arriving In...</label>
      <input type='text' name='to' alt='Arriving In...'>
      <label class='input-label' for='toDate'>Arrival Date</label>
      <input type='date' name='toDate' alt='Arrival Date'>
      <label class='radio-label' for='one-way'>One Way</label>
      <input type='radio' class='radio' name='one-way' alt='one-way'>
      <label class='radio-label' for='round-trip'>Round Trip</label>
      <input type='radio' class='radio' name='round-trip' alt='round-trip'>
      <input class='submit-button' type='submit' value='Fly'>
    </form>
    </nav>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
nav{
  position: absolute;
	background-image: url(https://secure.img1-fg.wfcdn.com/im/39064809/resize-h800%5Ecompr-r85/9862/98628906/Trippy+33%2527+x+20.5%2522+Geometric+Wallpaper.jpg) ;
	height: 100vh;
	width: 60vh;
}

.input-label{
	color: whitesmoke;
	font-family: 'Righteous', cursive;
	font-size: 20pt;
	-webkit-text-stroke: 1px grey;
}

.radio-label{
	color: whitesmoke;
	font-family: 'Righteous', cursive;
	font-size: 15pt;
	-webkit-text-stroke: 1px grey;
}

form{
	display: flex;
	margin-top: 60px;
	flex-direction: column;
	padding: 5em;
}

input{
	border: 2px solid hsla(19, 80%, 36%, 1);
	padding: 10px;
}

.radio{
	flex-direction: column;
	margin-left: 115px;
	margin-right: auto;
}

.submit-button{
	background: hsla(19, 66%, 47%, 1);
	opacity: 90%;
	font-family: 'Righteous', cursive;
}

</style>