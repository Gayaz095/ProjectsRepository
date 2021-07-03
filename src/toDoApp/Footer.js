import React from 'react'
import './myStyles.css' 

export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }
    render(){
        return(
            <div className='footer'>
           A React based To-do List App
            </div>
        )
    }
}