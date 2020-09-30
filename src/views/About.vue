<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
    <body>
      <div class="about">
        <section>
          <h1>About Beyond Air Travel</h1>
          <ul>
            <li>Beyond Air Travel started with a dream... a dream about making air travel sexy again. What happened to make us so bored with flying through the sky in a marvel of science? When did booking a flight start looking so much like booking a greyhound bus?</li>
            <li>Here at Beyond we seek to renew the excitement and luxury of air travel. By evoking the imagery and oppulence of Jet Age airlines, Beyond Air Travel invites you to get excited about flying again. </li>
            <li>Get your ticket, grab a cocktail and feel free to move about the cabin...because this is not air travel...this is Beyond Air Travel!</li>
          </ul>
          <img src="https://i.imgur.com/1XB8QDz.jpg" class="aboutPic">
        </section>
        <img src="https://i.imgur.com/WYY9rvZ.jpg" class="aboutbg"/>
      </div>
      <div @click="goToMenu" class="triangle-left">
        <p class="trinav">to Menu</p>
      </div>
      <div class="banner">
        <div @click="gotToRev" class="circle">
          <p class="cirnav">to Review</p>
        </div>
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
    },
    gotToRev(){
      this.$router.push({name: "Review"})
    }
  }
}
</script>

<style scoped>

section{
  position: absolute;
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-left: 85px;
  margin-right: 185px;
}

p{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
}

h1{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
}

ul{
  list-style: none;
  width: 50%;
}

li{
  font-family: 'Source Code Pro', monospace;  
  color: whitesmoke;
  margin-top: 12px;
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


.circle {
  width: 80px;
  height: 80px;
  background: hsl(14, 71%, 48%);
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
}

.cirnav{
  font-family: 'Righteous', cursive;
  font-size: 18pt;
  bottom: -0.6em;
  left: 0;
  margin-right: 25px;
  position: absolute;
  z-index: 2;
  cursor: pointer;
}

.aboutPic{
  width: 40%;
  position: absolute;
  margin-top: 650px;
  margin-left: 40px;
}
</style>