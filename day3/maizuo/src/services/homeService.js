import axios from 'axios'

function getBannerData(){
	axios.get('gateway?filmId=4832&k=6573922')
	.then(response=>{
		console.log('成功');
		console.log('失败');
	})
	.catch(error=>{
		console.log('失败');
		console.log(error);
	})
}