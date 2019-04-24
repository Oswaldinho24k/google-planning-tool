import React, { Component } from 'react'
import { Button, Input, Divider } from 'antd'
import './auth.css'

export class SignupComponent extends Component {
    render() {
        return (
            <div className="signup__section">
                <div>
                    <form>
                        <Input type="email" />
                        <Input type="password" />
                        <Button htmlType="submit">Signup</Button>
                    </form>
                    <Divider />
                    <Button type="danger">Signup with Google</Button>
                </div>
            </div>
        )
    }
}

export default SignupComponent
