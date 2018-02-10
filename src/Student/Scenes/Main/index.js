import React from 'react';
import './style.scss';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.passing = this.props.data.testResults.filter(test => 
      test.results.numFailedTests === 0
    );
    this.failing = this.props.data.testResults.filter(test => 
      test.results.numFailedTests !== 0
    );
  }
  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">Eviluator</h1>
        <h1 className="main-percent">{`${100 * (this.passing.length - this.failing.length)/this.passing.length} %`}</h1>
        {/* <div className="main-pass-fail-row">
          <p className="main-row-item pass-item">{this.passing.length}</p>
          <p className="main-row-item">{`   `}</p>
          <p className="main-row-item fail-item">{this.failing.length}</p>
        </div> */}
      </div>
    )
  }
}
