import React from 'react';

const IndexPage = () => (
  <div>
    <p
      style={{
        fontSize: '20px',
        fontWeight: 300,
      }}
    >
      I am a Software engineer specializing in frontend web development with a passion
      of making elegant and lightweight single page applications. Also a game
      enthusiast with an interest in the rising prominence of esports. Below are
      some of the technologies I work with.
    </p>
    <h4 className="tech-icon-header">Frontend</h4>
    <hr />
    <div className="tech-icon">
      <div>
        <i className="devicon-javascript-plain colored" />
      </div>
      <div>
        <i className="devicon-html5-plain-wordmark colored" />
      </div>
      <div>
        <i className="devicon-css3-plain-wordmark colored" />
      </div>
      <div>
        <i className="devicon-jquery-plain-wordmark colored" />
        <a href="https://github.com/Kiwilicious/tinychat/blob/master/js/app-main.js" target="_blank" rel="noopener noreferrer">Example</a>
      </div>
      <div>
        <i className="devicon-bootstrap-plain-wordmark colored" />
      </div>
      <div>
        <i className="devicon-react-original-wordmark colored" />
        <a href="https://github.com/Kiwilicious/CARe/blob/master/client/app/containers/navBar/NavigationBar.jsx" target="_blank" rel="noopener noreferrer">Example</a>
      </div>
      <div>
        <i className="devicon-angularjs-plain colored" />
      </div>
      <div>
        <i className="devicon-d3js-plain colored" />
      </div>
    </div>
    <h4 className="tech-icon-header">Backend</h4>
    <hr />
    <div className="tech-icon">
      <div>
        <i className="devicon-nodejs-plain colored" />
      </div>
      <div>
        <i className="devicon-express-original colored" />
        <a href="https://github.com/Kiwilicious/CARe/blob/master/server/index.js" target="_blank" rel="noopener noreferrer">Example</a>
      </div>
      <div>
        <i className="devicon-mysql-plain-wordmark colored" />
      </div>
      <div>
        <i className="devicon-postgresql-plain-wordmark colored" />
        <a href="https://github.com/Kiwilicious/CARe/blob/master/server/controllers/searchCtrl.js" target="_blank" rel="noopener noreferrer">Example</a>
      </div>
      <div>
        <i className="devicon-sequelize-plain colored" />
        <a href="https://github.com/Kiwilicious/CARe/blob/master/db/index.js" target="_blank" rel="noopener noreferrer">Example</a>
      </div>
    </div>
    <h4 className="tech-icon-header">Other</h4>
    <hr />
    <div className="tech-icon">
      <div>
        <i className="devicon-git-plain colored" />
      </div>
      <div>
        <i className="devicon-heroku-line-wordmark colored" />
      </div>
    </div>
  </div>
);

export default IndexPage;
