import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function Filter(props){

    return(
        <div>
            <p>{props.view}</p>
            <button onClick = {props.changeViewToAll}> All </button>
            <button onClick = {props.changeViewToActive}> Active </button> 
            <button onClick = {props.changeViewToDone}> Done </button>  
        </div>
    )
}
const mapStateToProps = state => {
    return{
        view : state.view
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeViewToAll : () => dispatch({type : 'CHANGE_VIEW_TO_ALL'}),
        changeViewToActive : () => dispatch({type : 'CHANGE_VIEW_TO_ACTIVE'}),
        changeViewToDone : () => dispatch({type : 'CHANGE_VIEW_TO_DONE'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)