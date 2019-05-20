import React　from 'react'
import {connect} from 'react-redux'
import styles from '../css/filter.css'
function Filter(props){
    return(
        <div>
            Filter: 
            <button style = {styles.sClicked} onClick = {props.changeViewToAll}> All </button>
            <button onClick = {props.changeViewToActive}> Active </button> 
            <button onClick = {props.changeViewToDone}> Done </button>  
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeViewToAll : () => dispatch({type : 'CHANGE_VIEW_TO_ALL'}),
        changeViewToActive : () => dispatch({type : 'CHANGE_VIEW_TO_ACTIVE'}),
        changeViewToDone : () => dispatch({type : 'CHANGE_VIEW_TO_DONE'})
    }
}

export default connect(null,mapDispatchToProps)(Filter)