import React ,{useState} from 'react'

function Form(props){
    const [text,setText] = useState("a");
   
    return (
        <div>
            {props.visivle == 'true' && <input type = 'text' value = {text} onChange={event => setText(event.target.value)}/>}
            {props.visivle == 'true' && <button onClick ={({text}) => props.function} />}
        </div>
    )
}

export default Form