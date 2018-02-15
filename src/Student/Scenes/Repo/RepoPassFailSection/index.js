import React from 'react';
import '../../style.scss';

export default class RepoPassFailSection extends React.Component {
  render() {
    return (
        <div className="repo-data failing">
          <h1 className="repo-data-title">{this.props.title}</h1>
           {this.props.data
            .map(test => 
              <div>
                <h1 className="repo-data-text">{test.name}</h1>
                <ul>
                  {test.assertionResults.map(assertion => <li className="repo-data-list-item">{assertion.title}</li>)}
                </ul>
              </div>
            )
          } 
        </div>
    )
  }
}