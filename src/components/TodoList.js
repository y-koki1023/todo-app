import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

function TodoList(props){
    const Task = props.todoDatas.map( todos =>
        (props.view === 'All' || todos.state === props.view) && todos.priority === props.priority? 
        <div>
            <Todo id = {todos.id} key = {todos.id} text = {todos.text} priority = {todos.priority} visible = 'true' /> 
        </div>:
        <div>
            <Todo id = {todos.id} key = {todos.id} text = {todos.text} priority = {todos.priority} visible = 'false' /> 
        </div>
    )
    return (
        <div>
            {Task}    
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        todoDatas : state.todoDatas,
        view : state.view
    }
}
export default connect(mapStateToProps)(TodoList)