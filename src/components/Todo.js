import React , {useState} from 'react'


function Todo(props){
    const [state,setState] = useState(props.state);
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