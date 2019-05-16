import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignupComponent from './components/auth/SignupComponent'
import LoginComponent from './components/auth/LoginComponent'
import ContentsList from './components/contents/ContentsList';
import ContentDetail from './components/contents/ContentDetail';
import ProfilePage from './components/user/ProfilePage';
import Home from './components/Home';
import ContentCalendar from './components/contents/ContentCalendar';
import ContentCreate from './components/contents/ContentCreate';


export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={SignupComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route exact path="/contents" component={ContentsList} />
                <Route exact path="/contents/new" component={ContentCreate} />
                <Route exact path="/content/:id" component={ContentDetail} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/calendar" component={ContentCalendar} />
            </Switch>
        )
    }
}

export default Routes
