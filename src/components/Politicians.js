import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading.js';
import Politician from './Politician.js';

class Politicians extends Component {

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      const senators = this.props.senate.map((senator) =>
        <Politician politician={senator} key={senator.id} id={senator.id}/>
      );
      return (
        <div>
          <h2>{this.props.state}'s {this.props.district} District</h2>
          <h2>Your Senators</h2>
          {senators}
          <h2>Your Representative</h2>
          <Politician politician={this.props.house} id={this.props.house.id}/>
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

export default connect(
  mapStateToProps
)(Politicians);
