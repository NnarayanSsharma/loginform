import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Model from 'react-modal'

Model.setAppElement("#root")
class SignUpForm extends Component {
  documentData;
  constructor(props) {
    super(props)
  
    this.state = {
        name: "",
        password: "",
        email: "",
        // dataArr: [],
        hasAgreed: false,
        message: "",
        isModel: false

    }
  }
  componentDidMount() {
    
 
      this.documentData = JSON.parse(localStorage.getItem(`document`));
      if (localStorage.getItem(`document`)) {
        this.setState({
            name: this.documentData.name,
            password: this.documentData.password,
            email: this.documentData.email,
            hasAgreed: this.documentData.hasAgreed
        })
      } else {
        this.setState({
            name: "",
            password: "",
            email: "",
            hasAgreed: false
        })
      }
    
  }
  handleChange = (e) => {
    const {name, value, type, checked} = e.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    // this.setState({dataArr:[...dataArr, {[name]: value}]})
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    // this.setState({...this.state})
    localStorage.setItem(`document`,JSON.stringify(this.state));
    // const data = localStorage.getItem();
    this.setState({
      message: "Sign Up successfully...",
      isModel: true
    })
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
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="FormField__Input" 
              placeholder="Enter your full name" 
              name="name"
              value= {this.state.name} 
              onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="FormField__Input" 
              placeholder="Enter your password" 
              name="password" 
              value= {this.state.password}
              onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input 
              type="email" 
              id="email" 
              className="FormField__Input" 
              placeholder="Enter your email" 
              name="email" 
              value= {this.state.email}
              onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
            <input 
              className="FormField__Checkbox" 
              type="checkbox" 
              name="hasAgreed"
              checked={this.state.hasAgreed}
              // value= {this.state.hasAgreed} 
              onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> 
            <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
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

export default SignUpForm
