import React  from 'react'
import {connect} from 'react-redux'
import Filter from '../components/Filter'
import Form from '../components/Form'
import Display from './Display'



function App(props){
    const rootStyle ={
        textAlign: 'center'
    }
    const filterStyle = {
        textAlign: 'left' 
    }
    return(
        <div style = {rootStyle}>
            <div style = {filterStyle}>
                Filters 
                <Filter view = {props.view}/>
            </div>
            <div>
                Insert
                <Form />
            </div>
            <div>
                <Display />
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        view : state.currentView
    }
}

export default connect(mapStateToProps)(App)
