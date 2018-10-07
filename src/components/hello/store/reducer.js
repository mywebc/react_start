import * as constants from './constants'

const defaultState = {
    name: 'hello',
    list: '这是原始数据'
}
// 默认暴露一个纯函数
export default (state = defaultState, action) =>{
    switch(action.type) {
        case constants.HELLO: 
            // 返回新的state
            return {...state, ...{name: 'newHello'}}
        case constants.CHANGE_SOMETHING:
            return {...state, ...{list: action.data}}
		default: 
			return state
	}
}