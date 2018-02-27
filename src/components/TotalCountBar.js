import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';


const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ words: !this.state.words });
  }

  render() {
    const { classes } = this.props;
    const { words } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Typography variant="title" color="inherit" className={classes.flex}>
              Total
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={words}
                  onChange={this.handleChange}
                />
              }
              label={words ? 'word' : 'character'}
            />
          </FormGroup>
        </AppBar>
      </div>
    );
  }
}


NavBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(NavBar);
