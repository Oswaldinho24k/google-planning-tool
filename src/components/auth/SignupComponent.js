import React, { Component } from 'react'
import { Button, Input, Divider, message } from 'antd'
import './auth.css'
import {signup} from '../../services/firebase'

export class SignupComponent extends Component {

    state={
        newUser:{}
    }

    handleChange=(event)=>{
        const {newUser} = this.state
        newUser[event.target.name] = event.target.value
        this.setState({newUser})
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const {newUser} = this.state
        const {email, password} = newUser
        signup(email, password)
            .then(r=>{
                message.success('User registered successfully')
                this.props.history.push('/login')
            }).catch(e=>{
                message.error(e.message)
            })
    }

    render() {
        return (
            <div className="signup__section">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Input type="email"  onChange={this.handleChange} name="email"/>
                        <Input type="password" onChange={this.handleChange} name="password"/>
                        <Button htmlType="submit" block>Signup</Button>
                    </form>
                    <Divider />
                    <Button type="danger" block>Signup with Google</Button>
                </div>
            </div>
        )
    }
}

export default SignupComponent
