import React,{useState} from 'react'
import {connect} from 'react-redux'

function Form(props){
    const [text,setText] = useState("aiueo")
    const [priority,setPriority] = useState("High")
    return (
        <div>
            <input type = 'text' value = {text} onChange={event => setText(event.target.value)}/>
            <select onChange = {event => setPriority(event.target.value)}>
                <option value= 'High'> High </option>
                <option value= 'Middle'> Middle </option>
                <option value= 'Low'> Low </option>
            </select>
            <button onClick = {() => props.insertTask(text, priority) }>Insert </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        insertTask : (text,priority) => dispatch({type : 'INSERTTASK', 
        payload :{
            text : text,
            priority : priority
        }})
    }
}

export default connect(null,mapDispatchToProps)(Form)