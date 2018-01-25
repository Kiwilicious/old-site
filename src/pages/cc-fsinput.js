import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class FSFormChallenge extends Component {
  render() {
    return (
      <div>
        <div><Link to="/coding-challenges">Back to coding challenges</Link></div>
        <div>
          <h2>Input Form</h2>          
          <p>
            This challenge involved replicating the look and functionality of an input form provided in a gif.
            While most of the code was simple enough, I didn't have much experience implementing animation on
            buttons. Instead I opted to use CSS transitions to color in the border of the button. This challenge
            was done in React.
          </p>
          <a href="https://codepen.io/Kiwilicious/pen/RxqWXY?editors=0110">Code here</a>

          <h2>Ruby Implementation of Erlang Code</h2>
          <p>
            This challenge involved taking the code provided in the language Erlang and recreate it in Ruby. I
            had no experience in either language so I skimmed through the Erlang docs. I also took some time to learn
            the basics of Ruby as I had planned on taking up the language it in the future. Turns out the logic of the
            code was simple enough, although I tripped over a few times because of syntax. This challenge was done in
            vanilla Ruby.
          </p>
          <a href="https://gist.github.com/dudo/93c0d1ee5b627c2a6cde30616540fb7f">Code in Erlang</a>
          <br/>
          <a href="https://gist.github.com/Kiwilicious/3b6728f4276fe7beb14795f830abbebe">Code in Ruby</a>
        </div>
      </div>
    )
  }
}
