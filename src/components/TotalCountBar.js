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
      totalWords: 0,
      totalCharacters: 0,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let newTotalWords;
    let newTotalCharacters;
    console.log('length');
    console.log(nextProps.counters.length);
    console.log(nextProps.counters);
    if (nextProps.counters.length === 1) {
      newTotalWords = nextProps.counters[0].words;
      newTotalCharacters = nextProps.counters[0].characters;
    }
    if (nextProps.counters.length === 0) {
      newTotalWords = 0;
      newTotalCharacters = 0;
    }
    if (nextProps.counters.length > 1) {
      newTotalWords = nextProps.counters.reduce((sum, counter) => sum += counter.words, 0);
      newTotalCharacters = nextProps.counters.reduce((sum, counter) => sum += counter.characters, 0);

      console.log(newTotalCharacters);
    }
    console.log(newTotalWords);
    this.setState({ totalWords: newTotalWords });
    this.setState({ totalCharacters: newTotalCharacters });
  }

  // handleChange() {
  //   this.setState({ words: !this.state.words });
  // }

  render() {
    const { classes, refresh } = this.props;
    const { totalWords, totalCharacters } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Button
            raised
            color="primary"
            className={classes.button}
            onClick={() => refresh()}
          >
          Save
          </Button>
          <Typography variant="title" color="inherit" className={classes.flex}>
              {totalWords}
          </Typography>
        </AppBar>
      </div>
    );
  }
}
// <FormGroup>
//   <FormControlLabel
//     control={
//       <Switch
//         checked={words}
//         onChange={this.handleChange}
//       />
//     }
//     label={words ? 'word' : 'character'}
//   />
// </FormGroup>


NavBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counters: PropTypes.arrayOf.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavBar);
