import React, { Component } from 'react'
import ContentForm from './ContentForm';
import ContentCard from './ContentCard';
import './contents.css'
import { saveContent, uploadFile, checkIfUser, getContentById } from '../../services/firebase'
import { message } from 'antd';


export class ContentDetail extends Component {

    state = {
        content: {
            text: 'Content Title',
            imageURL: 'https://foodiezlivestorage.blob.core.windows.net/images-new/UploadedImages/Restaurants/8d5efd3d-cf61-c232-591d-08d484c09b07/a9fca2cd-e51b-c592-a371-08d484c179d2_720x430.jpg',
            channel: 'Google',
            created: new Date(),
            tags: 'performance, branding',
            budget: 10000,
            publishDate: '',
            userID: '',
            userEmail: 'os@google.com'
        },
        user: null
    }

    componentWillMount() {
        checkIfUser((user) => {
            this.setState({ user })
            if (!user) {
                this.props.history.push('/login')
            } else {
                const { content } = this.state
                content['userID'] = user.uid
                content['userEmail'] = user.email
                this.setState({ content })
            }
        })

        const { id } = this.props.match.params
        if (id) {
            getContentById(id)
                .then(r => {
                    this.setState({ content: r.data() })
                }).catch(e => {
                    console.log(e)
                })
        }
    }

    handleChange = (event) => {
        const { content } = this.state
        const newContent = { ...content }
        newContent[event.target.name] = event.target.value
        this.setState({ content: newContent })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { content } = this.state
        saveContent(content)
            .then(r => {
                console.log(r)
                message.success('Saved Successfully')
            }).catch(e => {
                console.log(e)
                message.error('Errooooooooor')
            })
    }

    handleImage = (f) => {
        const file = f.file.originFileObj
        const { content } = this.state
        const task = uploadFile(file)
        task.on('state_changed', (snapshot) => {
            console.log(snapshot)
        }, (error) => { }, () => {
            task.snapshot.ref.getDownloadURL()
                .then(url => {
                    content['imageURL'] = url
                    this.setState({ content })
                }).catch(e => {
                    console.log(e)
                })
        })

    }

    render() {
        const { content } = this.state
        return (
            <div className="content-detail">
                <article>
                    <ContentForm
                        handleImage={this.handleImage}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        {...content} />
                </article>
                <article>
                    <ContentCard {...content} />
                </article>
            </div>
        )
    }
}

export default ContentDetail
