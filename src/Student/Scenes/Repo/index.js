import React from 'react';
import back from './back.png';
import './style.scss';


export default class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passing: [],
      failing: []
    }
  }
  componentDidMount() {
    const results = this.props.data.results.testResults;
    const passing =
      results
        .filter(test => 
          test.assertionResults.some(assertion => assertion.status === "passed")
        )
        .map(test => 
          ({
            assertionResults: test.assertionResults.filter(assertion => assertion.status === "passed"),
            name: test.name.match(/(?=tests\/)(.*)(?=\.test)/gi)[0].slice(6)
          })
        );
    const failing =
      results
        .filter(test => 
          test.assertionResults.some(assertion => assertion.status === "failed")
        )
        .map(test => 
          ({
            assertionResults: test.assertionResults.filter(assertion => assertion.status === "failed"),
            name: test.name
          })
        );
    console.log(passing, failing);
    this.setState({passing, failing});
  }
  render() {
    return (
      <div className="repo-data-container">
        <div className="repo-data failing">
          <h1 className="repo-data-title">Failing</h1>
           {this.state.failing
            .map(test => 
              <div>
                <h1 className="repo-data-text">{test.title}</h1>
                <ul>
                  {test.map(assertion => <li>{assertion.title}</li>)}
                </ul>
              </div>
            )
          } 
        </div>
        <div className="repo-data passing">
          <h1 className="repo-data-title">Passing</h1>
           {this.state.passing
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
        <img className="back-btn" onClick={this.props.showAll} src={back} alt="back" />
      </div>
    );
  }
}