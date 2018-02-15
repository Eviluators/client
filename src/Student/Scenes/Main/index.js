import React from 'react';
import '../style.scss';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
  }
  componentDidMount() {
    const percent = Math.round(
      100 * (this.props.passing/(this.props.passing + this.props.failing))
    );
    this.setState({percent});
  }
  componentWillReceiveProps(nextProps) {
    const percent = Math.round(
      100 * (nextProps.passing/(nextProps.passing + nextProps.failing))
    );
    if (this.state.percent !== percent)
      this.setState({percent});
    return nextProps;
  }
  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">Eviluator</h1>
        <h1 className="main-percent">{`${this.state.percent} %`}</h1>
        {/* <div className="main-pass-fail-row">
          <p className="main-row-item pass-item">{this.passing.length}</p>
          <p className="main-row-item">{`   `}</p>
          <p className="main-row-item fail-item">{this.failing.length}</p>
        </div> */}
      </div>
    )
  }
}
