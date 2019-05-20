import React  from 'react'
import {connect} from 'react-redux'
import Filter from '../components/Filter'
import Form from '../components/Form'
import Display from './Display'



function App(props){
    const rootStyle ={
        textAlign: 'center'
    }
    return(
        <div style = {rootStyle}>
            <div>
                <Filter view = {props.view}/>
            </div>
            <div>
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
