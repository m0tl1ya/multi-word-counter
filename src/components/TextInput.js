import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    // marginTop: theme.spacing.unit,
    // width: 600,
    // marginLeft: '1em',
    // display: 'flex',
    // flexWrap: 'wrap',
  }),
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '35em',
    margin: '1em'
    // marginLeft: '0.2em',
    // // marginLeft: '2em',
    // marginBottom: '0.9em',
    // marginRight: theme.spacing.unit,
  },
});


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
      isCounted: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    if (this.state.isCounted) {
      this.props.edit(e.target.value, e.target.value.length, e.target.value.length);
    }
  }

  handleState() {
    if (this.state.isCounted) {
      this.setState({ isCounted: false });
      this.props.edit(this.state.text, 0, 0);
    } else {
      this.setState({ isCounted: true });
      this.props.edit(this.state.text, this.state.text.length, this.state.text.length);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <TextField
        id="textarea"
        label="With placeholder multiline"
        placeholder="Paste your text"
        multiline
        value={this.props.text}
        className={classes.textField}
        margin="normal"
        onChange={this.handleChange}
        autoFocus="true"
      />

    );
  }
}

TextInput.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  edit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(TextInput);
