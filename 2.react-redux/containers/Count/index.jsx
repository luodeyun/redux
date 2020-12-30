//引入Count的UI模块
import CountUI from '../../components/Count'
//引入connect 用于连接UI组件与redux
 import {connect} from 'react-redux'
 import {createIncrementAction, createDecrementAction} from '../../redux/count_action'
 //a函数的返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value -状态
 function mapStateToProps(state){
     return {count:state}
 }
 //b函数的返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value  ----操作状态的方法
 function mapDispatchToProps(dispatch){
     return {
         jia:(number)=>{dispatch(createIncrementAction(number))},
         jian:(number)=>{dispatch(createDecrementAction(number))}
    }
 }
 //使用connect()()创建并暴露一个Count的容器组件
 export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

 