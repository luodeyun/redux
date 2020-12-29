//引入createStore、 创建store ，他是一个方法
import {createStore ,applyMiddleware} from 'redux'

import countReducer from './count_reducer'

import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))
 
