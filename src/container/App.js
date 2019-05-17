import React  from 'react'
import Filter from '../components/Filter'
import Form from '../components/Form'
import Display from './Display'



function App(){
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
                <Filter />
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
export default (App)
