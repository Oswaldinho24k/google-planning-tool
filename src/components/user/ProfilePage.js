import React, { Component } from 'react'
import { checkIfUser, getContentsByUser } from '../../services/firebase'
import ProfileCard from './ProfileCard'
import PostList from './PostList'

export class ProfilePage extends Component {

    state = {
        user: {},
        contents: []
    }

    componentWillMount() {
        checkIfUser((user) => {
            if (user) {
                this.setState({ user })
                getContentsByUser(user.uid)
                    .then(snap => {
                        const contents = []
                        snap.forEach((doc) => {
                            contents.push(doc.data())
                        })
                        this.setState({ contents })
                    }).catch(e => {
                        console.log(e)
                    })
            } else {
                this.props.history.push('/login')
            }
        })
    }

    render() {
        const { user, contents } = this.state
        return (
            <div>
                <div>
                    <ProfileCard {...user} />
                </div>
                <div>
                    <PostList contents={contents} />
                </div>
            </div>
        )
    }
}

export default ProfilePage
