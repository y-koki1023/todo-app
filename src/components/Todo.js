import React  from 'react'
import {connect} from 'react-redux'


function Todo(props){
    const isVisible = props.visible;
    const priority = props.priority;
    
    const style = {
        color : priority === 'High' ? 'red' : 'black'
    }

    return(
            <div>
                {isVisible === 'true' && <p style = {style}> {props.text} : {props.todoDatas[props.id].state} </p>}
                {isVisible === 'true' && <button style = {style} onClick ={() => props.changeState(props.id)}>Check</button>}
            </div>
    )

}

const mapStateToProps = state => {
    return {
        todoDatas : state.todoDatas,
        view :state.view
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        changeState : (id) => dispatch({type:'CHANGE_STATE', id:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)