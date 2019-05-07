import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PostList extends Component {

    render() {
        const { contents } = this.props
        return (
            <div>
                {contents.map((c, key) => (
                    <Link key={key} to={`/content/${c.id}`}>
                        {c.text}
                    </Link>
                ))}
            </div>
        )
    }
}

export default PostList
