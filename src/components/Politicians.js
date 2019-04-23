import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';

class Politicians extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      return (
        <div>
          <h2>Your Senators</h2>
          <h2>Your Representative</h2>
        </div>
      )
    }
    return (
      null
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingId: state.id.isFetching,
    house: state.id.house,
    senate: state.id.senate,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPolitician,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Politicians);
