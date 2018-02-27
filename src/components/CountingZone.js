import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import WordCounter from './WordCounter';


const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class CountingZone extends Component {
  constructor(props) {
    super(props);
    // this.renderParameters = this.renderParameters.bind(this);
  }

  render() {
    const { classes, counters, actions } = this.props;
    // console.log(filteredParameters);
    return (
      <div>
        {counters.map(counter =>
          <WordCounter
            counter={counter}
            actions={actions}
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
};

export default withStyles(styles)(CountingZone);
