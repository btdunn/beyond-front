<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Sonsie+One&display=swap" rel="stylesheet">
    <body>
      <div class="menu">
        <h1>In Flight Drink Options</h1>
        <ul>
          <li>
            <img src='https://i.imgur.com/tUJBvmI.png'/>
            <h3>Rum O.F.</h3>
            <p>saint lucia distillers 8 year old, rhum jm single barrel, woodford reserve selected blend bourbon, heritage prairie farms honey</p>
          </li>
          <li>
            <img src='https://i.imgur.com/E9DJSFY.png'/>
            <h3>Mai Tai</h3>
            <p>aged jamaican rum, aged barbados rum, martinique rhum agricole, dry curacao, lime, almond orgeat, jamaican overproof float</p>
          </li>
          <li>
            <img src='https://i.imgur.com/EwpRRfM.png'/>
            <h3>Jet Pilot</h3>
            <p>aged and overproof jamaican rum, lime, grapefruit, falernum, cinnamon</p>
          </li>
        </ul>
      </div>
      <div @click="goToAbout" class="triangle-right">
        <p class="trinav">to About</p>
      </div>
      <div class="banner">
      </div>
      <div class="ad">
        <h2>You can Vape on the Plane Now!</h2>
        <img class="vape" src="https://i.imgur.com/1EhV39t.png"/>
        <img class="adbg" src='https://i.imgur.com/Lk3DmDJ.jpg'/>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  methods: {
    goToAbout(){
      this.$router.push({name: "About"})
    }
  }
}
</script>

<style scoped>

header{
  display: flex;
}

ul{
  list-style: none;
  margin-right: 50px;
}

li{
  display: flex;
  flex-flow: row;
  align-items: center;
}

h2{
  font-family: 'Sonsie One', cursive;  
  color: whitesmoke;
  position: absolute;
  margin-top: 25px;
  margin-left: 50px;
  z-index: 2;
}

h1{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
  margin-left: 85px;
}

h3{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
}

p{
  margin-left: 45px;
  font-family: 'Righteous', cursive;
  color: whitesmoke;
  font-size: 10pt;
}

.menu{
  background-color: hsl(14, 71%, 48%);
  width: 50%;
  height: 100vh;
  float: left;
  display: flex;
  flex-flow: column;
  overflow: hidden;
}

.banner{
  background-image: url(https://i.imgur.com/1reX7Qi.jpg);
  background-repeat: no-repeat;
  width: 50%;
  height: 50vh;
  float: right;
}

.ad{
  background-color: hsl(174, 34%, 33%);
  background-size: cover;
  width: 50%;
  height: 50vh;
  float: right;
  overflow: hidden;
}

img{
  width: 38%;
}

.adbg{
  opacity: 30%;
  width:100%;
}

.vape{
  position: absolute;
  z-index: 1;
  width: 30%;
  margin-top: 120px;
  margin-left: 125px;
}

.triangle-right {
  right: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid hsl(174, 34%, 33%);
  border-bottom: 50px solid transparent;
}

.trinav{
  font-size: 18pt;
  top: -2.5em;
  right: 0;
  margin-right: 25px;
  position: absolute;
  z-index: 2;
  cursor: pointer;
}

</style>