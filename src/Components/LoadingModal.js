import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import './LoadingModal.css';

const styles = theme => ({
  progress: {
    color: 'green',
  },
});


class LoadingModal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className="loading-modal">
        <CircularProgress
          className={this.props.classes.progress}
          size={50}
          color="green"
        />
      </div>,
      document.getElementById('loading-modal')
    );
  }
}

export default withStyles(styles)(LoadingModal);
