import React from 'react';
import SideBar from '../SideBar';
import Main from '../Main';
import Repo from '../Repo';
import Repos from '../Repos';
import '../style.scss';

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRepo: false,
      repo: {}
    };
    this.setRepo = this.setRepo.bind(this);
    this.showAll = this.showAll.bind(this);
    this.passing = this.props.user["Test Results"].filter(test => 
      JSON.parse(test.Results).numFailedTests === 0
    ).length;
    this.failing = this.props.user["Test Results"].filter(test => 
      JSON.parse(test.Results).numFailedTests !== 0
    ).length;
  }
  componentDidMount() {
    this.props.showPage();
  }
  setRepo(repo) {
    this.setState(() => ({showRepo: true, repo}));
  }
  showAll() {
    this.setState({ showRepo: false });
  }
  render() {
    return (
      <div className="student-page">
        <SideBar
          data={this.props.user}
          setRepo={this.setRepo}
          user={this.props.user}
        />
        <div>
          <Main
            passing={this.state.showRepo ? JSON.parse(this.state.repo.Results).numPassedTestSuites : this.passing}
            failing={this.state.showRepo ? JSON.parse(this.state.repo.Results).numFailedTestSuites : this.failing}
          />
          {this.state.showRepo ? 
            <Repo data={this.state.repo} showAll={this.showAll}/> : 
            <Repos data={this.props.user} setRepo={this.setRepo}/>
          }
        </div>
      </div>
    );
  }
}
