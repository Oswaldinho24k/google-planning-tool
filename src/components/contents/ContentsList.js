import React, { Component } from 'react'
import { getContents, checkIfUser } from '../../services/firebase'
import { Link } from 'react-router-dom'
import {Row, Col, Card} from 'antd'

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
      <Row gutter={16} style={{padding:'1% 10%'}}>
        {contents.map((c, key) => (
          <Col span={8} key={key} >
            <Card 
              style={{margin:'10px 0'}}
              cover={<img style={{width:'100%', height:'200px'}} alt="example" src={c.imageURL} />}>
              <Link to={`/content/${c.id}`}>{c.text}</Link>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }
}

export default ContentsList
