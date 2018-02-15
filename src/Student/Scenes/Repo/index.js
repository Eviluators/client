import React from 'react';
import back from './back.png';
import RepoPassFailSection from './RepoPassFailSection';
import '../style.scss';


export default class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passing: [],
      failing: []
    }
  }
  componentDidMount() {
    const results = JSON.parse(this.props.data.Results).testResults;
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
            name: test.name.match(/(?=tests\/)(.*)(?=\.test)/gi)[0].slice(6)
          })
        );
    this.setState({passing, failing});
  }
  render() {
    return (
      <div className="repo-data-container">
        {this.state.failing.length > 0 ?
          <React.Fragment>
            <RepoPassFailSection data={this.state.failing} title="Failed"/>
            <RepoPassFailSection data={this.state.passing} title="Passed"/>
          </React.Fragment> :
          <h1 className="congrats-heading">You're Killing It!</h1>
        }
        <div className="back-div" onClick={this.props.showAll}>
          <img className="back-btn" src={back} alt="back" />
          <p className="back-text">Go Back</p>
        </div>
      </div>
    );
  }
}