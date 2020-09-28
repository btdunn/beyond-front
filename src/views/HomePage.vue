<template>
<div>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
    <title>Beyond Air Travel</title>
  </head>
  <body>
    <header>
      <div class='title-container'>
        <img class='logo' src='https://i.imgur.com/3y0HFCx.png'/>
      </div>
      <img class='background' src='https://i.imgur.com/SSdyCwK.jpg'/>
    </header>
		<div class="menu">
			<NewFlightForm @submit="seeOptions" />
		</div>
  </body>
</div>
</template>

<script>
import NewFlightForm from "@/components/NewFlightForm"

export default {
  components: {
		NewFlightForm,
	},
	methods: {
		seeOptions(selections){
			this.$router.push({name: 'Departures'})
			this.$store.dispatch('getFlightSearch', selections)
			this.$store.dispatch('showFlights')
		}
	}
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


body{
  margin:0;
}

.menu{
	display: flex;
	width: 70%;
	flex: 1;
	justify-content: flex-end;
	height: 100vh;
}

.background{
	z-index: -1;
	position: absolute;
	min-width: 100%;
	min-height: 100%;
}

.title-container{
	position: absolute;
	display: flex;
	height: 60vh;
	z-index: 2;	
	margin-left: 100px;
	margin-top: 100px;
}

.logo{
	display: flex;
	height: 30%;
	opacity: 100%;
}

</style>