import React, { Component } from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <main>          
        <section id="main__section">
          <div>
            <h1>
              Google planing tool
            </h1>
            <p>
              The best marketing planning tool ever seen
            </p>
            <Link to="/signup">
              <Button type="primary">Start Now!</Button>
            </Link>
          </div>
        </section>
        <section id="info__section"></section>
      </main>
    )
  }
}

export default Home
