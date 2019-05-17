import React from 'react'



function Todo(props){
    const style = {
        color : props.todo.priority === 'High' ? 'red' : 'black'
    }
    return(
            <div>
                <p style = {style}> {props.todo.text} : {props.todo.isActive ? 'Active' : 'Done'} </p>
                <button style = {style} onClick = {() => props.clicked(props.todo.id)}>Check</button>
            </div>
    )
    
}

export default (Todo)