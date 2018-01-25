import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class FSFormChallenge extends Component {
  render() {
    return (
      <div>
        <div><Link to="/coding-challenges">Back to coding challenges</Link></div>
        <div>
          <a href="https://codepen.io/Kiwilicious/pen/RxqWXY?editors=0110">Input form</a>
          <br />
          <a href="https://gist.github.com/dudo/93c0d1ee5b627c2a6cde30616540fb7f">Erlang</a>
          <a href="https://gist.github.com/Kiwilicious/3b6728f4276fe7beb14795f830abbebe">Ruby implementation</a>
        </div>
      </div>
    )
  }
}
