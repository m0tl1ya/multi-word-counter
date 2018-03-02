import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import { MenuItem, MenuIcon } from 'material-ui/Menu';

const typeOfCounter= [
  {
    value: 'Words',
    label: 'Words',
  },
  {
    value: 'Characters',
    label: 'Characters',
  },
];

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    margin: '0.5em',
    alignItems: 'center',
  },
  button: {
    margin: '0.5em',
  },
  selectField: {
    margin: '0.5em',
  },
  menu: {
    width: 200,
  },
});

class TotalCountBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWords: 0,
      totalCharacters: 0,
      type: 'Words',
    };
    this.handleType = this.handleType.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let newTotalWords;
    let newTotalCharacters;
    // console.log('length');
    // console.log(nextProps.counters.length);
    // console.log(nextProps.counters);
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

      // console.log(newTotalCharacters);
    }
    // console.log(newTotalWords);
    this.setState({ totalWords: newTotalWords });
    this.setState({ totalCharacters: newTotalCharacters });
  }

  handleType(event) {
    // this.props.editParameterType(id, event.target.value);
    this.setState({
      type: event.target.value,
    });
    this.props.switchMode.switchType(event.target.value);
  }

  render() {
    const { classes, addCounter, refresh } = this.props;
    const { totalWords, totalCharacters } = this.state;
    let element;
    if (this.state.type === 'Words') {
      if (totalWords > 0) {
        element = (
          <span>
            {totalWords} words
          </span>
        );
      } else {
        element = (
          <span>
            {totalWords} word
          </span>
        );
      }
    }
    if (this.state.type !== 'Words') {
      if (totalCharacters > 0) {
        element = (
          <span>
            {totalCharacters} characters
          </span>
        );
      } else {
        element = (
          <span>
            {totalCharacters} character
          </span>
        );
      }
    }
    return (
      <div className={classes.root}>
        <Typography variant="title" color="inherit">
          {element}
        </Typography>
        <TextField
          id="select-type"
          select
          className={classes.selectField}
          value={this.state.type}
          onChange={this.handleType}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {typeOfCounter.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={() => addCounter()}
        >
          Add
        </Button>
        <Button
          variant="raised"
          color="inherit"
          className={classes.button}
          onClick={() => refresh()}
        >
          Refresh
        </Button>
      </div>
    );
  }
}


TotalCountBar.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counters: PropTypes.arrayOf.isRequired,
  addCounter: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  switchMode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(TotalCountBar);
