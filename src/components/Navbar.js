import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../services/firebase'
import { message, Divider } from 'antd'

export class Navbar extends Component {

    logout = () => {
        logout()
            .then(r => {
                message.info('Byeeeee 😌')
            })
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Divider type="vertical" />
                    <Link to="/signup">Signup</Link>
                    <Divider type="vertical" />
                    <Link to="/login">Login</Link>
                    <Divider type="vertical" />
                    <a href="#!" onClick={this.logout}>Logout</a>
                    <Divider type="vertical" />
                    <Divider type="vertical" />
                    <Link to="/contents">Contents</Link>
                    <Divider type="vertical" />
                    <Link to="/calendar">Calendar</Link>
                    <Divider type="vertical" />
                    <Link to="/contents/new">New Content</Link>
                    <Divider type="vertical" />
                    <Link to="/profile">Profile</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar
