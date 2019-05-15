import React , {useState, useEffect} from 'react'
import Todo from './Todo'


function App(){
    const [todoDatas, setTodoDatas] = useState([]);
    const [inputText, setInputText] = useState("")
    const [view,setView] = useState('All');
    const [priority,setPriority] = useState("High")
    let tasks = todoDatas.map( (todos) => 
        view === 'All' || todos.state === view ? 
        <div>
            <Todo id = {todos.id} key = {todos.id} text = {todos.text} state = {todos.state} priority = {todos.priority} visible = 'true'/> 
            <button onClick ={ ()=> setTodoDatas(handleChange(todoDatas,todos.id))}> Check </button>
        </div>:
        <div>
            <Todo id = {todos.id} key = {todos.id} text = {todos.text} state = {todos.state} priority = {todos.priority} visible = 'false'/> 
        </div>
    ) 
    useEffect(() => {
        tasks = todoDatas.map( (todos) => 
            view === 'All' || todos.state == view ? 
            <div>
                <Todo id = {todos.id} key = {todos.id} text = {todos.text} state = {todos.state} priority = {todos.priority} visible = 'true'/> 
                <button onClick ={ ()=> setTodoDatas(handleChange(todoDatas,todos.id))}> Check </button>
            </div>:
            <div>
                <Todo id = {todos.id} key = {todos.id} text = {todos.text} state = {todos.state} priority = {todos.priority} visible = 'false'/> 
                
            </div>
        )  
    });

    return(
        <div>
            <div>
                Filters
                <button onClick = {() => setView ('All')}> All </button>
                <button onClick = {() => setView ('Active')}> Active </button> 
                <button onClick = {() => setView ('Done')}> Done </button>  
            </div>
            <br />
            <div>
                Insert
                <input type = 'text' value = {inputText} onChange={event => setInputText(event.target.value)}/>
                <select onChange = {event => setPriority(event.target.value)}>
                    <option value= 'High'> High </option>
                    <option value= 'Middle'> Middle </option>
                    <option value= 'Low'> Low </option>
                </select>
                <button onClick = { () => setTodoDatas(insertTodo(todoDatas,inputText,priority))}> Insert </button> 
                
            </div>
            <br />
            <div>
                Tasks
                {tasks}
            </div>
           
        </div>
    )
}

function handleChange(todoDatas,id){
    const todoCopy = todoDatas.slice();
    todoCopy[id -1].state = todoCopy[id - 1].state === 'Active' ? 'Done' : 'Active';
    return todoCopy
}

function insertTodo(todoDatas,inputText,priority){
    if(!inputText.match(/\S/g)){
        return (
            todoDatas
        )
    }else{
        return (
            [...todoDatas,
                {
                    key : todoDatas.length + 1,
                    id : todoDatas.length + 1,
                    text: inputText,
                    state : 'Active',
                    priority : priority
                }
            ]
        )
    }
}

export default App
