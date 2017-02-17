<template>
	<header>
		<a href="###"></a>
		<input type="text" name="" id="" placeholder="菜谱、专辑" />
		<a href="###" class="header_img"><img src="../assets/1_03.png"/></a>
	</header>
  
</template>

<script>
export default {
  name: 'find',
  data () {
//  return {
//    msg: 'Welcome to Your Vue.js App'
//  }
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
  /*position: relative;*/
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
</style>
