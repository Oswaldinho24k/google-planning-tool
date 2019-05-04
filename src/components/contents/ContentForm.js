import React, { Component } from 'react'
import { Input, Button, Upload, Icon } from 'antd'

export class ContentForm extends Component {
    render() {

        const { handleChange, handleSubmit, handleImage } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Input name="text" placeholder="Info of the post" onChange={handleChange} />
                <Input name="channel" placeholder="facebook or google" onChange={handleChange} />
                <Input name="tags" placeholder="performance, branding" onChange={handleChange} />
                <Input name="budget" placeholder="$$$" onChange={handleChange} />
                <Upload onChange={handleImage}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                <Button htmlType="submit">Save Post</Button>
            </form>
        )
    }
}

export default ContentForm
