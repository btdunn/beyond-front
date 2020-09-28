<template>
  <div>
    <body>
      <header>
        <div class="review-container">
          <div class="review">

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
export default {
  
}
</script>

<style scoped>

body{
  margin: 0;
}

header{
  display: flex;
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
  background-image: url(https://i.imgur.com/AIhhkT6.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.review{
  width: 50%;
  background-color: teal;
  height: 10vh;
  margin-top: 150px;
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