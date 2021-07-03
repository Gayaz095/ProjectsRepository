import React from 'react'
import './myStyles.css'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={};
        
    }
    render(){
        return(
            <div className='header'>
                <h3>To-do list</h3>
            </div>
        )
    }
}