<template>
  <div>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
      <title>Beyond Air Travel</title>    
    </head>
    <body>
      <header>
        <div class="depart-container">
          <h1 class='depart'>Departures</h1>
        </div>
      </header>
        <div class="departures">
          <DeparturesForm />
        </div>
    </body>
  </div>
</template>

<script>
import DeparturesForm from '@/components/DeparturesForm'

export default {
  components: {
    DeparturesForm
  },
}

</script>

<style scoped>

h1{
  font-family: 'Righteous', cursive;
  color: antiquewhite;
}

body{
  margin:0;
  z-index: -1;
  background-image: url(https://i.imgur.com/1cmLASQ.jpg);
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.depart-container{
  position: absolute;
  display: flex;
  z-index: 2;	
  margin-left: 100px;
}

.depart{
  display: flex;
  height: 20%;
  opacity: 100%;
}

.departures{
  display: flex;
  justify-content: center;
  /* background-color: rgb(235, 159, 74); */
  opacity: 90%;
  width: 80%;
  height: 80vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}

</style>