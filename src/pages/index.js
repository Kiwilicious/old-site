import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi there</h1>
    <h3>My name is James. I am a software engineer who is focused on the frontend. Below are some of the technology I work with.</h3>
    <h3>Frontend</h3>
    <div className="tech-icon">
      <i className="devicon-javascript-plain colored"></i>
      <i className="devicon-html5-plain-wordmark colored"></i>
      <i className="devicon-css3-plain-wordmark colored"></i>
      <i className="devicon-jquery-plain-wordmark colored"></i>
      <i className="devicon-bootstrap-plain-wordmark colored"></i>
      <i className="devicon-react-original-wordmark colored"></i>
      <i className="devicon-angularjs-plain colored"></i>
      <i className="devicon-d3js-plain colored"></i>
    </div>
    <h3>Backend</h3>
    <div className="tech-icon">
      <i className="devicon-nodejs-plain colored"></i>
      <i className="devicon-express-original colored"></i>
      <i className="devicon-mysql-plain-wordmark colored"></i>
      <i className="devicon-postgresql-plain-wordmark colored"></i>
      <i className="devicon-sequelize-plain colored"></i>
    </div>
    <h3>Other</h3>
    <div className="tech-icon">
      <i className="devicon-git-plain colored"></i>
      <i className="devicon-heroku-line-wordmark colored"></i>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
