<template>
	<div class="wrap">
		<!--搜索-->
		<header>
			<a href="###"><img src="../assets/1_06.png" alt="" /></a>
			<input type="text" name="" id="" placeholder="菜谱、专辑" />
			<a href="#/find" class="header_img"><img src="../assets/1_03.png"/></a>
		</header>
	
		<!--轮播-->
		<div class="banner">
			<img src="../assets/50ffaa9ea4b.jpg"/>
		</div>
		<!--<div class="main">
			vfvmgmyt
		</div>-->
		
		
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header{
	width: 100%;
	height: 5rem;
	position: fixed;
  top:0;	
  left:0;
  z-index: 9;
  display: flex;
  overflow: hidden;
  border:1px solid blue
}
header a{
		flex: 1;		
}
header input{
	margin-top: 1rem;
	flex: 7;
	width: 70%;
	height:2.5rem;
	background: url(../assets/search.png) no-repeat #f5f5f3;
	background-position:0 50% ;
	text-indent: 3rem;
	font-size: 25px;
}
header img{
	width: 50%;
	margin-top: 1rem;
	margin-left: 30%;
}

.banner{
	overflow: hidden;
	margin-top: 5rem;
}
.banner img{
	width:100% ;
}

.main{
	width: 100%;
	color: red;
	margin-top: 80px;
	background: yellow;
}
</style>
