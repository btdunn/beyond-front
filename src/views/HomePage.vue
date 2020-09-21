<template>
<div>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='index.css'>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <title>Beyond Air Travel</title>
  </head>
  <body>
    <header>
      <div class='title-container'>
        <img class='logo' src='https://i.imgur.com/wLERsIg.png'/>
      </div>
      <img class='background' src='https://i.imgur.com/SSdyCwK.jpg'/>
    </header>
    <div class='menu'>
      <nav>
        <form>
          <label class='input-label' for='from'>Departing From...</label>
          <input type='text' name='from' alt='Departing From...'>
          <label class='input-label' for='to'>Arriving In...</label>
          <input type='text' name='to' alt='Arriving In...'>
          <label class='radio-label' for='one-way'>One Way</label>
          <input type='radio' class='radio' name='one-way' alt='one-way'>
          <label class='radio-label' for='round-trip'>Round Trip</label>
          <input type='radio' class='radio' name='round-trip' alt='round-trip'>
          <input class='submit-button' type='submit' value='Fly'>
        </form>
      </nav>
    </div>
  </body>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* end meyers */

/* .title-container{
  /* background-image: url(https://i.imgur.com/SSdyCwK.jpg) no-repeat center center fixed; */
	/* position: absolute; */
	/* width: 100%;
	min-width: 100%;
	min-height: 100%;
	z-index: -1;
} */

.background{
	z-index: -1;
	position: absolute;
	min-width: 100%;
	min-height: 100%;
}


nav{
	/* position: absolute; */
	background-image: url(https://secure.img1-fg.wfcdn.com/im/39064809/resize-h800%5Ecompr-r85/9862/98628906/Trippy+33%2527+x+20.5%2522+Geometric+Wallpaper.jpg) ;
	height: 100vh;
	width: 60vh;
}

.title-container{
	position: absolute;
	display: flex;
	height: 60vh;
	z-index: 2;	
	margin-left: 100px;
	margin-top: 100px;
}

.menu{
	display: flex;
	width: 100%;
	flex: 1;
	justify-content: flex-end;
	height: 100vh;
}

.logo{
	display: flex;
	height: 30%;
	opacity: 80%;
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
	margin-top: 100px;
	flex-direction: column;
	padding: 5em;
}

input{
	border: 2px solid hsla(19, 80%, 36%, 1);
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