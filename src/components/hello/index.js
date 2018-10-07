import React, { Component } from 'react'
import { connect } from	'react-redux'
import  { actionCreators }  from './store'
import { Link } from 'react-router-dom'


class Hello extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                this is hello
                <hr/>
                从state里面拿到的数据：{this.props.name}
                <hr/>
                <Link to='/detail'>跳转路由</Link>
                <hr/>
                <button onClick={this.props.handelGetSomething}>获取数据</button>
                <hr/>
                请求获得的数据：{this.props.list}
                <hr/>
            </div>
        )
    }
}

// 将公共的state传给当前组件当作props
const mapStateToProps = (state) => {
	return {
        name: state.hello.name,
        list: state.hello.list
	}
}
// 将Dispath传给当前组件当作props
const mapDispathToProps = (dispath) => {
	return {
		handelGetSomething() {
			dispath(actionCreators.getSomething())
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Hello)