import React , {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Navbar from './components/Navbar';
import {withRouter} from 'react-router-dom'


class App extends  Component{
  
  componentWillMount(){
    
  }

  render(){
    console.log(this.props)
    return (
      <div>
        {this.props.location.pathname==='/' ? '': <Navbar />}        
        <Routes /> 
      </div>
    );
  }
}

export default withRouter(App);
