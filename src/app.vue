<template>
    <div>
        <p>hahahah</p>
		<button @click="getdata">用axios获取后台数据</button>
        <div class="mui-content-padded" style="margin: 5px;text-align: center;">
				<button id='alertBtn' type="button" class="mui-btn mui-btn-blue mui-btn-outlined">警告消息框</button>
				<button id='confirmBtn' type="button" class="mui-btn mui-btn-blue mui-btn-outlined">确认消息框</button>
				<div id="info"></div>
		</div>
        <mt-button type="danger">default</mt-button>
        <!-- <button id='alertBtn' type="button" class="mui-btn mui-btn-blue mui-btn-outlined">警告消息框</button> -->
        <router-link to="/count" >登录</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import mui from './lib/js/mui.min.js'

export default {
	data(){
		return {

		}
	},
	created(){
       
	},
	methods:{
		//axios获取后台数据
      getdata(){
		   this.$http.post('/posts',{
				name:'lyy',
				age:22
			}
		).then(result=>{
				console.log(result)//result是一个含有很多属性的对象
			})
	  }

	}
   
        
}
</script>
<style lang="css" scoped>

</style>