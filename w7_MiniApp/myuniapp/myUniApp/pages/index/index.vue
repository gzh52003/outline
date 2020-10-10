<template>
	<view class="content">
		<h1>首页</h1>
		<img class="logo" src="/static/logo.png"/>
		<view class="text-area">
			<text class="title">{{title}} {{username}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				username:"laoxie"
			}
		},
		onLoad() {

		},
		created(){
			console.log('create')
		},
		mounted(){
			console.log('mounted');
			
			uni.navigateTo()
		},
		methods: {

		}
	}
</script>

<style>
	h1{font-zie:30px;margin:15px 0;color:#f00;}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
