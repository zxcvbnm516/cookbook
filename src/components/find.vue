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
<style scoped lang="scss">
$width:100%;
header{
	width: $width;
	height: 4rem;
	position: fixed;
  top:0;	
  left:0;
  z-index: 9;
  display: flex;
  background: #fff;
  overflow: hidden;
  a{
		flex: 1;		
	}
	input{
		margin-top: 1rem;
		flex: 7;
		width: 70%;
		height:2rem;
		background: url(../assets/search.png) no-repeat #f5f5f3;
		background-position:0 50%;
		background-size:8% ;
		text-indent: 3rem;
		font-size: 20px;
		color:#949492;
	}
	 img{
		width: 50%;
		margin-top: 1rem;
		margin-left: 30%;
	}
}
</style>
