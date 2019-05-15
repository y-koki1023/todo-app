import React  from 'react'


function Todo(props){
    const isVisible = props.visible;
    const priority = props.priority;
    const style = {
        color : priority === 'High' ? 'red' : 'black'
    }
    return(
            <div>
                {isVisible === 'true' && <p style = {style}>{props.text} : State {props.state} </p>}
            </div>
    )

}


export default Todo