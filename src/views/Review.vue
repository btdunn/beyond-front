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
  opacity: 50%;
  margin-left: 50px;
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
  background-color: teal;
  height: 50vh;
  margin-top: 100px;
}

nav{
  background-color: hsla(5, 79%, 53%, 1);
  width: 100%;
  height: 40vh;
  position: absolute;
  display: flex;
  justify-content: flex-end;
}
</style>