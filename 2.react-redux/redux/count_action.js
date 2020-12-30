/**
  该文件为Count组件生成action对象
 */

//同步action就是指action的值为Object类型的一般对象
 export const createIncrementAction=data=>({type:'increment',data})

 export const createDecrementAction=data=>({type:'decrement',data})

//所谓的异步axtion就是action的值为函数，因为无论是数组还是对象都不能开启异步任务
 export const createIncrementActionAsync=(data,time)=>{
     //下面代码会报错 整理下
     //在组件中我们直接调用了store.dispatch(createIncrementActionAsync(value*1,500)) 
     //createIncrementActionAsync(value*1,500)为一个函数该函数返回值为一个函数相当于
     //store.dispatch(一个函数)这是不允许的 里面的action必须为一个对象所以这时候我们需要一个中间件
     //中间件redux-thunk
     //让redux自己调用store.dispatch(一个函数)的函数生成一个store.dispatch(对象)
     //1.下载npm i redux-thunk
     //2.在rudux身上获取applyMiddleware作为 createStore(countReducer,applyMiddleware(thunk))
     //3.引入import thunk from 'redux-thunk'
     //目的 下面的函数是store自己调用的 传入dispatch
       return ()=>{
         setTimeout((dispatch)=>{
            dispatch(createIncrementAction(data))
         },time)
       }
 }