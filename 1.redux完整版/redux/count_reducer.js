/*
 1.该文件是用于创建一个为Count组件范围的reducer，reducer的本质就是一个函数
 2.reducer函数接收两个参数，分别是之前的参数，和动作对象(action)
*/
const initState=0
export default function countReducer(preState=initState,action){   
   const {type,data} = action 
   switch(type){
        case 'increment':   
          return preState + data
        case 'decrement':
          return preState - data
        default:
          return preState
   }
}