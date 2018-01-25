import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class CodingChallenges extends Component {
  render() {
    return (
      <div>
        <p>***WIP***</p>
        <p>Below are some of the coding challenges I've completed for various companies.</p>
        <div><Link to="/cc-chat">Front end chat app</Link></div>
        <div><Link to="/cc-fsinput">Front end input form & back end implementation</Link></div>
      </div>
    )
  }
}
