import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import Politician from './Politician.js';

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
      const senators = this.props.senate.map((senator) =>
        <Politician politician={senator} key={senator.id}/>
      );
      return (
        <div>
          <h2>{this.props.state}'s {this.props.district} District</h2>
          <h2>Your Senators</h2>
          {senators}
          <h2>Your Representative</h2>
          <Politician politician={this.props.house} />
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
    state: state.id.state,
    district: state.id.district,
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
