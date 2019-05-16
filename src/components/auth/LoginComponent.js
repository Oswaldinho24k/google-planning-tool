import React, { Component } from 'react'
import { Button, Input, Divider, message } from 'antd'
import './auth.css'
import { login } from '../../services/firebase'

export class LoginComponent extends Component {

    state = {
        newUser: {}
    }

    handleChange = (event) => {
        const { newUser } = this.state
        newUser[event.target.name] = event.target.value
        this.setState({ newUser })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { newUser } = this.state
        const { email, password } = newUser
        login(email, password)
            .then(r => {
                message.success('Welcome')
                console.log(r)
            }).catch(e => {
                message.error(e.message)
            })
    }

    render() {
        return (
            <div className="signup__section">
                <div>
                   <div>
                   <form onSubmit={this.handleSubmit}>
                        <Input type="email" onChange={this.handleChange} name="email" placeholder='email'/>
                        <Input type="password" onChange={this.handleChange} name="password" placeholder='password'/>
                        <Button htmlType="submit" block>Login</Button>
                    </form>
                    <Divider />
                    <Button type="danger" block>Login with Google</Button>
                   </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent
