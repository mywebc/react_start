// 根组件
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter,Route } from 'react-router-dom'
import Detail from './components/detail'
import Hello from './components/hello'

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
      {/* 把需要用路由的地方括起来  exact精确匹配*/}
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Hello}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            this is app
          </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
