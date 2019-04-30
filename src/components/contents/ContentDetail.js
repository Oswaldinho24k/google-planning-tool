import React, { Component } from 'react'
import ContentForm from './ContentForm';
import ContentCard from './ContentCard';
import './contents.css'


export class ContentDetail extends Component {

    state = {
        content: {
            text: 'Content Title',
            imageURL: 'https://foodiezlivestorage.blob.core.windows.net/images-new/UploadedImages/Restaurants/8d5efd3d-cf61-c232-591d-08d484c09b07/a9fca2cd-e51b-c592-a371-08d484c179d2_720x430.jpg',
            channel: 'Google',
            created: new Date(),
            tags: ['performance', 'branding'],
            budget: 10000,
            publishDate: new Date(),
            userID: 'os@google.com'
        }
    }

    render() {
        const { content } = this.state
        return (
            <div className="content-detail">
                <article>
                    <ContentForm />
                </article>
                <article>
                    <ContentCard {...content} />
                </article>
            </div>
        )
    }
}

export default ContentDetail
