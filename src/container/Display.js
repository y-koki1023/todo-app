import React ,{useState,useEffect}from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'



function Display(props){

    const inLine = {
        display: 'inline-block',
        padding : '50px',
        width : '200px',
        verticalAlign:  'top'
    }
    return(
        <div>
            <div style = {inLine}>
                High
                <TodoList priority = 'High'/>
            </div>
            <div style = {inLine}>
                Middle
                <TodoList priority = 'Middle'/>
            </div>
            <div style = {inLine}>
                Low
                <TodoList priority = 'Low'/>
            </div>
            
        </div>
    )
}
/*
function dealTasks(todoDatas,view,priority){
    const Task = todoDatas.map( todos =>
        (view === 'All' || todos.state === view) && todos.priority === priority? 
        <div>
            <Todo id = {todos.id} key = {todos.id} text = {todos.text} priority = {todos.priority} visible = 'true' /> 
        </div>:
        <div>
            <Todo id = {todos.id} key = {todos.id} text = {todos.text} priority = {todos.priority} visible = 'false' /> 
        </div>
    )
    return Task
}
*/
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