import React from 'react';
import githubLogo from './GitHub-Mark-120px-plus.png';
import './style.scss';

export default class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e, test) {
    this.props.setRepo(test);
    console.log(test);
  }
  render() {
    return (
      <div className="repos-container">
        <ul className="repo-container">
          {this.props.data.testResults.map(test => 
            <li className="repo-module" onClick={(e) => this.clickHandler(e, test)}>
              <p className="repo-module-text">{test.RepoName}</p>
              <img className="repo-module-logo" src={githubLogo} alt="github logo" />
            </li>
          )}
        </ul>
      </div>
    );
  }
}