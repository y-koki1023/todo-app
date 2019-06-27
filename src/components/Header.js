import React from 'react'
import Style from '../css/Header.module.css'

function Header(){
    return(
        <div className ={Style.HeaderBar}>
            <h1>Todo-List</h1>
        </div>
    )
}

export default Header