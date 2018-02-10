import React from 'react';
import githubLogo from './GitHub-Mark-120px-plus.png';
import './style.scss';

export default class Repos extends React.Component {
  render() {
    return (
      <div className="repos-container">
        <ul className="repo-container">
          {this.props.data.testResults.map(test => 
            <li className="repo-module">
              <p className="repo-module-text">{test.RepoName}</p>
              <img className="repo-module-logo" src={githubLogo} alt="github logo" />
            </li>
          )}
        </ul>
      </div>
    );
  }
}