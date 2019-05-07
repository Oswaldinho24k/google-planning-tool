import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupComponent from './components/auth/SignupComponent'
import LoginComponent from './components/auth/LoginComponent'
import ContentsList from './components/contents/ContentsList';
import ContentDetail from './components/contents/ContentDetail';
import ProfilePage from './components/user/ProfilePage';


export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/signup" component={SignupComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route exact path="/contents" component={ContentsList} />
                <Route exact path="/contents/new" component={ContentDetail} />
                <Route path="/content/:id" component={ContentDetail} />
                <Route path="/profile/" component={ProfilePage} />
            </Switch>
        )
    }
}

export default Routes
