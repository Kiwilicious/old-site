import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class TinyChatChallenge extends Component {
  render() {
    return (
      <div>
        <div><Link to="/coding-challenges">Back to coding challenges</Link></div>
        <div>
          <h2>Chat Application</h2>
          <a href="https://github.com/Kiwilicious/tinychat">Code here</a>
          </div>
      </div>
    )
  }
}
