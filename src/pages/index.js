import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <p style={{
      fontSize: "20px",
      fontWeight: 300,
    }}>
      I am a Software engineer specializing in frontend web development with a passion
      of making elegant and lightweight single page applications. Also a game
      enthusiast with an interest in the rising prominence of esports. Below are
      some of the technologies I work with.
    </p>
    <h4 className="tech-icon-header">Frontend</h4>
    <hr />
    <div className="tech-icon">
      <i className="devicon-javascript-plain colored" />
      <i className="devicon-html5-plain-wordmark colored" />
      <i className="devicon-css3-plain-wordmark colored" />
      <i className="devicon-jquery-plain-wordmark colored" />
      <i className="devicon-bootstrap-plain-wordmark colored" />
      <i className="devicon-react-original-wordmark colored" />
      <i className="devicon-angularjs-plain colored" />
      <i className="devicon-d3js-plain colored" />
    </div>
    <h4 className="tech-icon-header">Backend</h4>
    <hr />
    <div className="tech-icon">
      <i className="devicon-nodejs-plain colored" />
      <i className="devicon-express-original colored" />
      <i className="devicon-mysql-plain-wordmark colored" />
      <i className="devicon-postgresql-plain-wordmark colored" />
      <i className="devicon-sequelize-plain colored" />
    </div>
    <h4 className="tech-icon-header">Other</h4>
    <hr />
    <div className="tech-icon">
      <i className="devicon-git-plain colored" />
      <i className="devicon-heroku-line-wordmark colored" />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
);

export default IndexPage;
