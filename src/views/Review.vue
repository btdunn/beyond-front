<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <body>
      <header>
        <div class="review-container">
          <div class="review">
            <h1>Your Flight</h1>
            <ReviewFlight />
          </div>
        </div>
        <div class="banner">
        </div>

      </header>
      <nav>
        <div @click="goToMenu" class="menu">
          <h2>In-Flight Menu</h2>
        </div>
        <div @click="goToAbout" class="about">
          <h2>About Us</h2>
        </div>
      </nav>
    </body>
  </div>
</template>

<script>
import ReviewFlight from '@/components/ReviewFlight'

export default {
  components: {
    ReviewFlight,
  },
  methods: {
    goToMenu(){
      this.$router.push({name: 'Menu'})
    },
    goToAbout(){
      this.$router.push({name: 'About'})
    }
  }
}
</script>

<style scoped>

body{
  margin: 0;
}

header{
  display: flex;
}

h1{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
  opacity: 80%;
  margin-left: 40px;
}

h2{
  font-family: 'Righteous', cursive;
  color: whitesmoke;
  opacity: 80%;
}

.review-container{
  width: 50%;
  background-image: url(https://i.imgur.com/YbnZC4W.png);
  background-size: cover;
  display: flex;
  justify-content: center;
}

.banner{
  width: 50%;
  height: 70vh;
  background-image: url(https://i.imgur.com/gLWk0Ig.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.review{
  width: 70%;
  background-color: hsl(174, 34%, 33%);
  height: 50vh;
  margin-top: 55px;
  border-radius: 15px;
}

nav{
  background-color: hsl(14, 71%, 48%);
  width: 100%;
  height:50vh;
  position: absolute;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

.menu{
  margin-top: 20px;
  margin-left: 40px;
  width: 30%;
  background-image: url(https://i.imgur.com/HQHRTBv.png);
  background-size: cover;
  height: 40vh;
  cursor: pointer;
}

.about{
  margin-top: 20px;
  margin-left: 40px;
  width: 30%;
  background-image: url(https://i.imgur.com/pljadCU.jpg);
  background-size: cover;
  height: 40vh;
  cursor: pointer;
}
</style>