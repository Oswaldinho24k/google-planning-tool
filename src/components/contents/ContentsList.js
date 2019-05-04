import React, { Component } from 'react'
import { getContents } from '../../services/firebase'
import { Link } from 'react-router-dom'

export class ContentsList extends Component {

  state = {
    contents: []
  }

  componentWillMount() {
    getContents()
      .then(snapshot => {
        const { contents } = this.state
        const c = []
        snapshot.forEach(doc => {
          c.push(doc.data())
        })
        this.setState({ contents: c })
      }).catch(e => {
        console.log(e)
      })
  }

  render() {
    const { contents } = this.state
    return (
      <div>
        {contents.map((c, key) => (
          <Link key={key} to={`/content/${c.id}`}>{c.text}</Link>
        ))}
      </div>
    )
  }
}

export default ContentsList
