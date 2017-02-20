<template>
	
  <div id="app">
    <router-view></router-view>
    	<footer>
		  	<ul>
		  		<li class="footer_li1"><div></div><a href="/">吃什么</a></li>
		  		<li><div></div><a href="#/find">发现</a></li>
		  		<li><div></div><a href="#/square">广场</a></li>
		  		<li><div></div><a href="#/mine">我的</a></li>
		  	</ul>
	  	</footer>
   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$width:100%;
html,body{
	font-size: 10px;
	width: $width;
}
*{
	margin: 0;
	padding: 0;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
}
footer {
	  width:$width;
	  position: fixed;
	  bottom:0;
	  height:5rem;
	  background: #efece7;
}
footer ul{
		width: 100%;
		margin-left: 3%;
}
footer li{
	 	 width: 23%;
		float: left;
		text-align: center;
}
footer li a{
		font-size: 1.5rem;
		color: #000;
}

footer div{
			width: 45%;
			height: 3rem;
			margin: auto;
			background: url(assets/foot.png) no-repeat;
			background-size: 460% 220%;
			margin-bottom: 0.5rem;
}
.footer_li1 a{
	color:#f2b024
}
footer li:nth-child(1) div{
		background-position: 0 85%;
}
footer li:nth-child(2) div{
		background-position: 29% 0;
}
footer li:nth-child(3) div{
		background-position: 60% 0;
}
footer li:nth-child(4) div{
		background-position: 90% 0;
}
</style>
