<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <body>
      <div class="menu">
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
      <div class="banner">

      </div>
      <div class="ad">

      </div>
    </body>
  </div>
</template>

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
  /* justify-content: space-evenly; */
}

.banner{
  background-image: url(https://i.imgur.com/1reX7Qi.jpg);
  background-repeat: no-repeat;
  /* background-color: hsl(); */
  width: 50%;
  height: 50vh;
  float: right;
}

.ad{
  background-color: hsl(174, 34%, 33%);
  width: 50%;
  height: 50vh;
  float: right;
}

img{
  width: 38%;
}

</style>