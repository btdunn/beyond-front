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
        <div class='side-image'>

        </div>
    </body>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  body{
    background-image: url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/stratocumulus-from-above-1.jpg);
    min-width: 100%;
    min-height: 100%;
  } 

  h1{
    font-family: 'Righteous', cursive;
  }

  .depart-container{
    position: absolute;
    display: flex;
    height: 60vh;
    z-index: 2;	
    margin-left: 100px;
    margin-top: 100px;
  }

  header{
    display: flex;
    /* width: 100%; */
    flex: 1;
    justify-content: flex-end;
    height: 100vh;
  }

  .side-image{
    background-color: purple;
    height: 100vh;
    width: 60vh;
  }
</style>