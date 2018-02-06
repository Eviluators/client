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


const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  }
})
class SideBar extends React.Component {
  render() {
        const { classes, theme } = this.props;

    return (
      <div>
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <img className="img" src={this.props.img} alt={this.props.name}/>
        <h1>Hi</h1>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SideBar);