import React, { Component } from 'react'

export class ProfileCard extends Component {
    render() {
        const { email, uid } = this.props
        return (
            <div>
                {email}
            </div>
        )
    }
}

export default ProfileCard
