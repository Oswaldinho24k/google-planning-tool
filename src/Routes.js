import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupComponent from './components/auth/SignupComponent'
//import LoginComponent from './components/auth/LoginComponent'


export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/signup" component={SignupComponent} />
                {/* <Route path="/login" component={LoginComponent} /> */}
            </Switch>
        )
    }
}

export default Routes
