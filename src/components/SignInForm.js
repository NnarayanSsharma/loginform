import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Model from 'react-modal'

Model.setAppElement("#root")
class SignInForm extends Component {
  documentData
  constructor(props) {
    super(props)
  
    this.state = {
       email: "",
       password: "",
       message: "",
       isModel: false
    }
  }

  componentDidMount(){
    this.documentData = JSON.parse(localStorage.getItem(`document`));
      if (localStorage.getItem(`document`)) {
        this.setState({
            password: this.documentData.password,
            email: this.documentData.email,
        })
      } else {
        this.setState({
            password: "",
            email: ""
        })
      }
    
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = this.documentData;
    if(this.state.email === data.email && this.state.password === data.password){
      this.setState({
        message: "Login Successfull...",
        isModel: true
      })
    }
    else{
      this.setState({
        message: "Uppsss Login Failed...",
        isModel: true
      })
    }
  }
  closeModel = (e) => {
    e.preventDefault()
    this.setState({
      isModel: false
    })
  }

  render() {
     
    return (
      <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" onChange={this.handleChange} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" onChange={this.handleChange} />
            </div>

            <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button> 
                <Link to="/" className="FormField__Link">Create an account</Link>
                <Model 
                  isOpen={this.state.isModel} 
                  onRequestClose={this.closeModel}
                  className="modelStyle"
                >
                  <h3 className="message">{this.state.message}</h3>
                </Model>
            </div>
          </form>
          
      </div>
    )
  }
}

export default SignInForm
