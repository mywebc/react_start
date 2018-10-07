import * as constants from './constants'
import axios from 'axios'

// 这里创建action
export const Hello = () =>({
    type: constants.HELLO
})
const changeSomething = (data)=>({
    type: constants.CHANGE_SOMETHING,
    data: data
})
// 因为引入了redux-thunk中间件，我们可以在这里书写函数
// 比如请求
export const getSomething = () =>{
	return (dispath)=>{
		axios.get('/api/getSomething.json').then((res)=>{
			// 修I改store里的数据
			dispath(changeSomething(res.data.data.list))
		}).catch((e)=>{
			console.log(e)
		})
	}
}
