import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TotalCountbar from '../components/TotalCountBar';
import CountingZone from '../components/CountingZone';
import * as CounterActions from '../actions/counterActions';

const MultiWordCounter = ({ counters, actions }) => (
  <div>
    <TotalCountbar
      counters={counters}
      refresh={actions.refresh}
    />
    <CountingZone
      counters={counters}
      actions={actions}
    />
  </div>
);

MultiWordCounter.propTypes = {
  counters: PropTypes.arrayOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
};

const mapStateToProps = state => ({
  counters: state.counters,
});

// console.log(CreateModuleActions);

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(CreateModuleActions, dispatch),
  actions: bindActionCreators(CounterActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(MultiWordCounter);
