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
		<!--分类-->
		<div class="classify">
			<ul>
				<a href=""><li>
					<img src="../assets/1_11.png" alt="" />
					<p>看视频</p>
				</li></a>
				<a href=""><li>
					<img src="../assets/1_13.png" alt="" />
					<p>厨房宝典</p>
				</li></a>
				<a href=""><li>
					<img src="../assets/1_15.png" alt="" />
					<p>热门活动</p>
				</li></a>
				<a href=""><li>
					<img src="../assets/1_17.png" alt="" />
					<p>排行榜</p>
				</li></a>
				<a href=""><li>
					<img src="../assets/1_19.png" alt="" />
					<p>菜谱分类</p>
				</li></a>
			</ul>
		</div>
		
		<!--图片-->
		<div class="tu">
			<ul>
				<li><a href=""><img src="../assets/t_03.png"/></a></li>
				
				<li><a href=""><img src="../assets/t_05.png"/></a></li>
				<li><a href=""><img src="../assets/t_09.png"/></a></li>
				<li><a href=""><img src="../assets/t_0.png"/></a></li>
						
			</ul>
		</div>
		
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


.banner{
	overflow: hidden;
	margin-top: 4rem;
	img{
		width:$width;
		height: 15rem;
	}
}

.classify{
	width: 100%;
	overflow: hidden;
	margin: 1rem 0;
	/*border: 1px solid #ff0;*/
	li{
		width: 20%;
		float: left;
		text-align: center;
		color:#000000;
		img{
			width: 50%;
		}
		
	}
}
.tu{
	overflow: hidden;
	background: #f3efee;
	padding: 0.5rem;
	width: $width;
	li{
		width: 48%;
		float: left;
		margin-left: 0.4rem;
		padding-bottom: 0.3rem;
		img{
			width: 96%;
		}		
	}
}
</style>
