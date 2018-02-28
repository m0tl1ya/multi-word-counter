import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';

import WordCounterHeader from './WordCounterHeader';
import TextInput from './TextInput';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: theme.spacing.unit,
    width: 600,
    marginLeft: '1em',
    display: 'flex',
    flexWrap: 'wrap',
  }),
  textField: {
    width: '20em',
    marginLeft: '0.2em',
    // marginLeft: '2em',
    marginBottom: '0.9em',
    marginRight: theme.spacing.unit,
  },
});


class WordCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: this.props.counter.words,
      characters: this.props.counter.characters,
    };
    this.handleText = this.handleText.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ words: nextProps.counter.words });
    this.setState({ characters: nextProps.counter.characters });
  }

  handleText(text, words, characters) {
    this.props.actions.editText(this.props.counter.id, text, words, characters);
  }

  render() {
    const { classes, counter, actions } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <WordCounterHeader
          deleteCounter={actions.deleteCounter}
          id={counter.id}
          words={this.state.words}
          characters={this.state.characters}
        />
        <TextInput
          text={counter.text}
          edit={this.handleText}
        />
      </Paper>
    );
  }
}

WordCounter.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counter: PropTypes.objectOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(WordCounter);
