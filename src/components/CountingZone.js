import React, { Component } from 'react';

import PropTypes from 'prop-types';

import WordCounter from './WordCounter';


class CountingZone extends Component {
  constructor(props) {
    super(props);
    // this.renderParameters = this.renderParameters.bind(this);
  }

  render() {
    const { counters, actions } = this.props;
    // console.log(filteredParameters);
    return (
      <div>
        {counters.map(counter =>
          <WordCounter
            key={counter.id}
            counter={counter}
            deleteCounter={actions.deleteCounter}
            editText={actions.editText}
          />)}
      </div>
    );
  }
}

CountingZone.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  counters: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
};

export default CountingZone;
