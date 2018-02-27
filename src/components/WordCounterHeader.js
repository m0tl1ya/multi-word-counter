import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import ClearIcon from 'material-ui-icons/Clear';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { blueGrey } from 'material-ui/colors';
import { Link } from 'react-router-dom';
import Switch from 'material-ui/Switch';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 400,
  },
  descField: {
    marginLeft: theme.spacing.unit*7,
    marginRight: theme.spacing.unit,
    background: blueGrey[50],// #afbbc9
    width: 500,
  },
  button: {
    top: '0.0em',
  }
});


class WordCounterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.title,  //'',
      description: this.props.description, //'',
      parameters: this.props.parameters,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
  }

  // componentDidMount() {
  //   // this.setState({ parameters: this.props.parameters });
  //   // console.log(this.state);
  //   console.log("component mounted")
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // this.setState({ name: nextProps.title });
    // this.setState({ description: nextProps.description });
    this.setState({ parameters: nextProps.parameters });
  }

  handleDiscard() {
    this.props.discardHeaderInfo()
    this.props.discard();
  }


  render() {
    const { classes } = this.props;

    return (
      <div className="CounterHeader">
        <Switch
            checked={this.state.checked}
            onChange={this.handleSwitch}
            onBlur={this.handleBlur}
          />

      </div>
    );
  }
}

WordCounterHeader.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  parameters: PropTypes.objectOf.isRequired,
  title: PropTypes.objectOf.isRequired,
  description: PropTypes.objectOf.isRequired,
  discardParameters: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  discardHeaderInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(WordCounterHeader);
