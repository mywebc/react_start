import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../components/hello/store'
// 一般来说，一个组件一个store
// 在这里我们把所有的reducer合并成一个
const reducer = combineReducers({
	hello: headerReducer
})

export default reducer