import React, { Component } from 'react'
import { Input, Button, Upload, Icon, DatePicker } from 'antd'

export class ContentForm extends Component {
    render() {

        const { handleDate, handleChange, handleSubmit, handleImage, text, imageURL, channel, created, tags, budget, publishDate, userID, userEmail } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Input name="text" placeholder="Info of the post" onChange={handleChange} value={text} />
                <Input name="channel" placeholder="facebook or google" onChange={handleChange} value={channel} />
                <Input name="tags" placeholder="performance, branding" onChange={handleChange} value={tags} />
                <Input name="budget" placeholder="$$$" onChange={handleChange} value={budget} />
                <Upload onChange={handleImage}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                <DatePicker onChange={handleDate} />
                <Button htmlType="submit">Save Post</Button>
            </form>
        )
    }
}

export default ContentForm
