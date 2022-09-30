import React, { Component } from 'react'
import './AddContact.css';

export default class AddContacts extends Component {
  state={
    name:"",
    email:""
  };
  appendContact = (e)=>{
    // this.setState({id: })
    e.preventDefault()
    if(this.name=== ""|| this.email=== ""){
      alert("all feilds are mandatory")
      return
    }
    this.props.addContactHandler(this.state);
    this.setState({ name:"" , email:""})
    console.log(this.state)
  }
  render() {
    return (
      <div className='form-main'>
        <h2 className='form-text'>Add Contact</h2>
        <form className='ui form' onSubmit={this.appendContact}>
            <div className='form-feild'>
                {/* <label>Name</label> */}
                <input
                 type="text"
                 name="name" 
                 placeholder="name"
                 value={this.state.name}
                 onChange={(e)=>{this.setState({name:e.target.value})}}/>
            </div>
            <div className='form-feild'>
                {/* <label>email</label> */}
                <input 
                type="text" 
                name="email" 
                placeholder="email"
                value={this.state.email}
                onChange={(e)=>{this.setState({email:e.target.value})}}/>
            </div>
            <button className='form-button'>Add</button>
        </form>
      </div>
    )
  }
}
