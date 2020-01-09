import axios from 'axios'
import API from '../api'

export function getHomeBannerData(){
	// 创建promise请求数据，数据处理成功之后,传递给resolve方法
	return new Promise((resolve,reject)=>{
	
		// 异步请求 
		axios.get(API.HOME_BANNER_URL,{
			params: {
				__t: new Data().getTime()	
			}
		})
		.then(response=>{
			console.log('成功');
			console.log(response.data.data.billboards);
			let data = response.data.data.billboards.map(item=>{
				return {
					id: item.id,
					imgUrl: item.imageUrl
				}
			})
		})
		.catch(error=>{
			console.log('失败');
			console.log(error);
		})
	})
}

export function getNowPlayingData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.NOW_PLAYING_url,{
			__t: new Date().getTime(),
			page,
			count
		})
		.then(response=>{
			console.log(response.data.data.films);
		})
		.catch(error=>{
			console.log(error);
		})
	})
	
}



