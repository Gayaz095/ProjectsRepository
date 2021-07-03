import React from 'react'
import './myStyles.css'

export default class ToDoList extends React.Component {
    constructor(props){
    super(props)
        this.state = {
        list: [],
        myTask: '',
        tempTask: '',
        newDesc:'',
        tempDesc: '',
        newDate: [],
        tempDate: '',
    }
    }
    myData = () =>{  
    this.setState({
      list: [...this.state.list, 
      { tempTask: this.state.myTask, 
        tempDesc: this.state.newDesc, 
        tempDate: new Date(this.state.newDate),
        checked: false //here, this is a boolen value
      }], 
        myTask: '', newDesc: '' , newDate:''
      })
    }
    myFunction=(ind)=>{
        this.setState({...this.state, list:[...this.state.list.slice(0, ind), {...this.state.list[ind], checked:!this.state.list[ind].checked},...this.state.list.slice(ind+1)]}) //here adding element dyanmically
    }
    delItem = (ind)=>{
    this.setState({list: [...this.state.list.slice(0, ind), ...this.state.list.slice(ind + 1)]})  //here, deleting dyanmically added element
    }


render(){
 return(
   <div className='container'>
  <p>Enter to-do task: </p>
<input type="text" value={this.state.myTask} onChange={(event1)=>{this.setState({myTask: event1.target.value})}}></input>
<br />
<br />
  <p>Description of the task: </p>
<input type="text" value={this.state.newDesc} onChange={(event2)=>{this.setState({newDesc: event2.target.value})}}></input>
<br />
<br />
  <p>Date of submission: </p>
<input type="date" value={this.state.newDate} onChange={(event3)=>{this.setState({newDate: event3.target.value})}}></input>
<button  className="button"  onClick={()=>{this.myData()}}>Add Date</button>
<br />
<br />
  <h3>To-do list of task:</h3>
  <ol  className='myOL'>
      {this.state.list.map((item,ind)=>{
          return <li className='myLI' style={{ border: item.tempDate < new Date() ? "1px solid yellow" : ""}} key={ind}><input type="checkbox" checked={item.checked} onChange={()=>{this.myFunction(ind)}}></input>
          <span  style={item.checked? {textDecorationLine:"line-through"}:{}}> MyTask: {item.tempTask} <br/>  Details of task: {item.tempDesc} </span>
          {/* displaying element with a checkbox and using a function with key={ind} to stirke off the displayed element only*/}

          {item.tempDate < new Date() && <span style={{color:"red"}}>   (Due date is passsed)</span>} 
          {/* adding an element, if date of submission is after due date, i.e, comparing dates   */}

          <button className="button"  style={{backgroundColor:"lightgrey"}}  onClick={() => this.delItem(ind)}>Delete</button> 
          {/* button to delete added element */}
         
          </li>
}
)
} </ol>
  </div>
)
}
}