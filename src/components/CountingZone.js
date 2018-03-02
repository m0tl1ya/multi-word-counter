import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import WordCounter from './WordCounter';


const styles = theme => ({
  container: {
    margin: '1em',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class CountingZone extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { classes, counters, actions, mode } = this.props;
    // console.log(filteredParameters);
    return (
      <div className={classes.container}>
        {counters.map(counter =>
          <WordCounter
            counter={counter}
            actions={actions}
            mode={mode}
          />)}
        <Button
          variant="fab"
          className={classes.fab}
          color="primary"
          onClick={actions.addCounter}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

CountingZone.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counters: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
  mode: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(CountingZone);
