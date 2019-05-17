import React　from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'



function Display(props){

    const inLine = {
        display: 'inline-block',
        padding : '50px',
        width : '200px',
        verticalAlign:  'top'
    }
    const onClick = props.changeState
    
    return(
        <div>
            <div style = {inLine}>
                High
                <TodoList priority = 'High' todoDatas = {props.todoDatas} clicked = {onClick}/>
            </div>
            <div style = {inLine}>
                Middle
                <TodoList priority = 'Middle' todoDatas = {props.todoDatas}/>
            </div>
            <div style = {inLine}>
                Low
                <TodoList priority = 'Low' todoDatas = {props.todoDatas}/>
            </div>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        todoDatas : state.todoDatas,
        view : state.view
    }
}
const mapDispatchToProps = dispatch => {
    return{
        changeState : (id) => dispatch({type:'CHANGE_STATE', id:id})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Display)