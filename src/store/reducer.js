const initialState = {
    todoDatas : [{
        id : 0,
        text: "Hello",
        state : 'Active',
        priority : "High"
    }],
    view : 'Active'
}
const reducer = (state = initialState, action) => {
    if(action.type === 'CHANGE_VIEW_TO_ALL'){
        const newState = Object.assign({},state);
        newState.view = 'All'
        return newState
    }
    if(action.type === 'CHANGE_VIEW_TO_ACTIVE'){
        const newState = Object.assign({},state);
        newState.view = 'Active'
        return newState
    }
    if(action.type === 'CHANGE_VIEW_TO_DONE'){
        const newState = Object.assign({},state);
        newState.view = 'Done'
        return newState
    }
    if(action.type === 'INSERTTASK'){
        const newState = Object.assign({},state);
        newState.todoDatas = 
            [...newState.todoDatas,
                {
                    id : newState.todoDatas.length,
                    text: action.payload.text,
                    state : 'Active',
                    priority : action.payload.priority
                }
            ]
        console.log(newState)
        return newState
    }
    if(action.type === 'CHANGE_STATE'){
        const newState = Object.assign({},state);
        newState.todoDatas[action.id] = 
                {
                    id : action.id,
                    text: newState.todoDatas[action.id].text,
                    state : newState.todoDatas[action.id].state === 'Active' ? 'Done' : 'Active',
                    priority : newState.todoDatas[action.id].priority
                }
        return newState
    }
    return state
}
    
    


export default reducer 