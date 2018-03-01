import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import ClearIcon from 'material-ui-icons/Clear';
import { blueGrey } from 'material-ui/colors';
import Switch from 'material-ui/Switch';


const styles = theme => ({
  button: {
    top: '0.0em',
    marginLeft: theme.spacing.unit * 7,
  },
});


class WordCounterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const {
      classes,
      id,
      words,
      characters,
      deleteCounter,
    } = this.props;

    let element;
    if (this.state.checked) {
      if (words > 0) {
        element = (
          <span>
            {words} words
          </span>
        );
      } else {
        element = (
          <span>
            {words} word
          </span>
        );
      }
    }
    if (!this.state.checked) {
      if (characters > 0) {
        element = (
          <span>
            {characters} characters
          </span>
        );
      } else {
        element = (
          <span>
            {characters} character
          </span>
        );
      }
    }
    return (
      <div className="CounterHeader">
        {element}
        <Switch
          checked={this.state.checked}
          onChange={this.handleSwitch}
        />
        <IconButton
          className={classes.deleteButton}
          aria-label="Delete"
          onClick={() => deleteCounter(id)}
        >
          <ClearIcon />
        </IconButton>

      </div>
    );
  }
}

WordCounterHeader.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  id: PropTypes.number.isRequired,
  words: PropTypes.number.isRequired,
  characters: PropTypes.number.isRequired,
  deleteCounter: PropTypes.func.isRequired,
};

export default withStyles(styles)(WordCounterHeader);
