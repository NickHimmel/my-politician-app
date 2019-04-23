import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';

class Politician extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id && this.props.fetchingId === false) {
      this.props.fetchPolitician(this.props.id)
    }
  }

  render() {
    if (this.props.fetchingId && this.props.fetchingPolitician) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false && this.props.fetchingPolitician === false) {
      return (
        <div>

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
)(Politician);
