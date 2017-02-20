<template>
	<div>
		<!--我的-->
		<header>
			<p>我的</p>
			<a href=""><img src="../assets/mine/mi_03.png" alt="" /></a>
		</header>
  
  		<!--登录-->
  		<div class="login">
  			<a href=""><p>登录</p></a>
  			<a href=""><p>注册</p></a>
  		</div>
  
  		<!--菜谱-->
  		<div class="food">
  			<ul>
  				<li class="food_li1"><a href="">
  					<p>菜谱</p>
  					<img src="../assets/mine/mi_07.png" alt="" />
  					<p>0</p>
  				</a></li>
  				<li><a href="">
  					<p>话题</p>
  					<img src="../assets/mine/mi_09.png" alt="" />
  					<p>0</p>
  				</a></li>
  				<li><a href="">
  					<p>相册</p>
  					<img src="../assets/mine/mi_11.png" alt="" />
  					<p>0</p>
  				</a></li>
  				<li><a href="">
  					<p>草稿</p>
  					<img src="../assets/mine/mi_13.png" alt="" />
  					<p>0</p>
  				</a></li>
  			</ul>
  		</div>
  		
  		<div class="issue">
  			<img src="../assets/mine/mi_20.png" alt="" /><p>发布菜谱</p>
  		</div>
  	</div>
</template>

<script>
export default {
  name: 'mine',
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
$color: #f2b024;
header{
	width: $width;
	height:5rem;
	background: #f8f8f8;
	overflow: hidden;
	p{
		text-align: center;
		line-height: 5rem;
		float: left;
		font-size: 25px;
		margin-left: 45%;
		color: $color;
		font-family: "微软雅黑";
	}
	img{
		float: left;
		margin-left: 34%;
		margin-top: 1rem;
		width: 7%;
	}
}
.login{
	width: $width;
	height: 10rem;
	background: -webkit-linear-gradient(60deg,#f2f3eb,#cdcbca);
	p{
		float: left;
		font-size: 20px;
		margin-top: 3rem;
		width: 10%;
		margin-left: 19%;
		background: $color;
		color:#fff;
		padding: 1rem 2rem;
		border-radius:0.7rem ;	
	}
}
.food{
	width: $width;
	height:8rem;
	li{
		width: 24.7%;
		float: left;
		text-align: center;
		margin-top: 1rem;
		border-left: 1px solid #CDCBCA;
		a{
			color:#000;
			font-size: 15px;
		}
	}
}
.food .food_li1{
	border-left:none;
}
.issue{
	border-top:5px solid #e1e1e1;
	border-bottom:5px solid #e1e1e1;
	width: $width;
	height: 4rem;
	font-size: 16px;
	img{
		margin-top: 1rem;
		float: left;
		vertical-align: center;
	}
	p{
		float: left;
		line-height: 4rem;
	}
}



</style>
