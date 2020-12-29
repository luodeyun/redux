import React, { Component } from 'react'
//引入store 
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction,createIncrementActionAsync} from '../../redux/count_action'
export default class Count extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }
    increment = () => {
        const { value } = this.selectNumber
        //通知reducer加工
        console.log(store);
        store.dispatch(createIncrementAction(value*1))
        /*
       这时我们已经改变了redux的状态值但是页面没刷新
        解决办法：检测redux的状态变化时更新页面
           1.在componentDidMount 中调用 store.subscribe(()=>{回调})
           2.在最外层的index.js写下以下代码
           store.subscribe(()=>{
             ReactDOM.render( <App/>,document.getElementById('root')
                );
           })
        */
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        let count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        // setTimeout(()=>{
           store.dispatch(createIncrementActionAsync(value*1,500))
        // },500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
