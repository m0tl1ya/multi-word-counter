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
      text: this.props.counter.text,
      words: this.props.counter.words,
      characters: this.props.counter.characters,
      isCounted: this.props.counter.isCounted,
    };
    this.handleText = this.handleText.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.counter.text });
    this.setState({ words: nextProps.counter.words });
    this.setState({ characters: nextProps.counter.characters });
    this.setState({ isCounted: nextProps.counter.isCounted });
  }

  handleText(text) {
    if (this.state.isCounted) {
      this.props.actions.editCounter(this.props.counter.id, text, text.split(/\s+./).length, text.length, true);
    }
  }

  handleState() {
    if (this.state.isCounted) {
      // this.setState({ isCounted: false });
      this.props.actions.editCounter(this.props.counter.id, this.props.counter.text, 0, 0, false);
    } else {
      // this.setState({ isCounted: true });
      this.props.actions.editCounter(
        this.props.counter.id,
        this.props.counter.text,
        this.props.counter.text.split(/\s+./).length,
        this.props.counter.text.length,
        true
      );
    }
  }

  render() {
    const { classes, counter, actions, mode } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <div>
          <WordCounterHeader
            deleteCounter={actions.deleteCounter}
            id={counter.id}
            words={this.state.words}
            characters={this.state.characters}
            switchCount={this.handleState}
            onActive={counter.isCounted}
            displayMode={mode}
          />
        </div>
        <div>
          <TextInput
            text={counter.text}
            edit={this.handleText}
          />
        </div>
      </Paper>
    );
  }
}

WordCounter.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counter: PropTypes.objectOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
  mode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(WordCounter);
