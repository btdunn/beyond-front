<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <body>
      <div class="about">
        <h1>About Beyond Air Travel</h1>
        <img src="https://i.imgur.com/WYY9rvZ.jpg" class="aboutbg"/>
      </div>
      <div @click="goToMenu" class="triangle-left">
        <p class="trinav">to Menu</p>
      </div>
      <div class="banner">
      </div>
      <div class="schematic">
        <img class="plane" src='https://i.imgur.com/7iFr7NY.png'/>
        <img class="schbg" src='https://i.imgur.com/k8Vupsa.jpg'/>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu(){
      this.$router.push({name: "Menu"})
    }
  }
}
</script>

<style scoped>

p{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
}

h1{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
  margin-left: 85px;
  position: absolute;
}

.about{
  background-color: hsl(37, 52%, 22%);
  width: 50%;
  height: 100vh;
  float: left;
  /* display: block; */
  overflow: hidden;
}

.schematic{
  background-color: hsl(57, 91%, 65%);
  width: 50%;
  height: 50vh;
  float: right;
  overflow: hidden;
}

.banner{
  background-image: url(https://i.imgur.com/jeY1FHN.jpg);
  background-repeat: no-repeat;
  width: 50%;
  height: 50vh;
  float: right;
}


.triangle-left{
  bottom: 0;
  left: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid hsl(14, 71%, 48%);
  border-bottom: 50px solid transparent;
}

.trinav{
  font-size: 18pt;
  top: -2.2em;
  left: 0;
  margin-left: 25px;
  position: absolute;
  z-index: 2;
  cursor: pointer;
  color: whitesmoke
}

.plane{
  position: absolute;
  width: 40%;
  margin-top: 90px;
  margin-left: 45px;
  opacity: 100%;
  z-index: 1;
}

.schbg{
  width: 100%;
  opacity: 15%;
}

.aboutbg{
  width: 100%;
  opacity: 15%;
}

</style>