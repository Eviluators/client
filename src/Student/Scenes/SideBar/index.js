import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Avatar from 'material-ui/Avatar';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import './style.scss';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-top-container" >
        <Avatar className="sidebar-avatar" src={this.props.user.photos[0].value} alt={this.props.data.name}/>
        <h1 className="sidebar-name">{this.props.user.username}</h1>
        </div>
        <ExpansionPanel className="expansion-panel">
        <ExpansionPanelSummary className="sidebar-expansion-title" expandIcon={<ExpandMoreIcon />}>
          <h1 className="sidebar-expansion-name sidebar-name">Repositories</h1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul className="sidebar-repo-list">
          {this.props.data.testResults.map(test =>
            <li onClick={() => this.props.setRepo(test)}>
              <h2 className="sidebar-repo-test-name">{test.RepoName}</h2>
            </li>
          )}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    )
  }
}

export default SideBar;