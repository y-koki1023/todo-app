import React from 'react'
import Todo from './Todo'

function TodoList(props){
    const Task = props.todoDatas.map( todo => {
        return (todo.isVisible && (todo.priority === props.priority)) &&
            <Todo  key = {todo.id} todo={todo} clicked = {props.clicked}/> 
        }
    )

    return (
        <div>
            {Task}    
        </div>
    )
}

export default (TodoList)