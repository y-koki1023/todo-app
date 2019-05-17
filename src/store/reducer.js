const initialState = {
    todoDatas : [],
    currentView : 'All'
}
const reducer = (state = initialState, action) => {
    
    if(action.type === 'CHANGE_VIEW_TO_ALL'){
        const newState =  Object.assign({},state)
        const todos = state.todoDatas;
        const newTodos = todos.map( todo => {
            todo.isVisible = true
            return todo
        })
        newState.todoDatas = newTodos
        newState.currentView = 'All'
        return newState
    }
    if(action.type === 'CHANGE_VIEW_TO_ACTIVE'){
        const newState =  Object.assign({},state)
        const todos = state.todoDatas;
        const newTodos = todos.map( todo => {
            todo.isVisible = todo.isActive === true ? true : false
            return todo
        })
        newState.todoDatas = newTodos
        newState.currentView = 'Active'
        return newState
    }
    if(action.type === 'CHANGE_VIEW_TO_DONE'){
        const newState =  Object.assign({},state)
        const todos = state.todoDatas;
        const newTodos = todos.map( todo => {
            todo.isVisible = todo.isActive === false ? true : false
            return todo
        })
        newState.todoDatas = newTodos
        newState.currentView = 'Done'
        return newState
    }
    
    if(action.type === 'INSERTTASK'){
        const newState = Object.assign({},state);
        newState.todoDatas = 
            [...newState.todoDatas,
                {
                    id : new Date().getTime(),
                    text: action.payload.text,
                    isActive : true,
                    isVisible : state.currentView === 'All' || 'Active' ? true : false,
                    priority : action.payload.priority
                }
            ]

        return newState
    }
    if(action.type === 'CHANGE_STATE'){
        console.log("A")
        const newState = Object.assign({},state);
        const todos = newState.todoDatas;
        const newTodoData = todos.map( todo => {
            if(todo.id === action.id){
                todo.isActive = !todo.isActive
                todo.isVisible = 
                state.currentView === 'All' || ((!todo.isActive) && state.currentView === 'Active') || 
                ((!todo.isActive) && state.currentView === 'Done') ? true : false 
            }
            return todo
        })
        newState.todoDatas = newTodoData
        /*
        return todos.map(todo => {
            if(todo.id === action.id){
                todo.state = todo.state === 'Active' ? 'Done': 'Active';
            }
        })
        */
       return newState
    }
    return state
}
    
    


export default reducer 