import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import NavForRepresentatives from './NavForRepresentatives.js';
import Politician from './Politician.js';

class Representatives extends Component {

  handleClick = (e, id, nextElection) => {
    this.props.fetchPolitician(id,nextElection);
  }

  listNames = (senate, house) => {
    const senators = senate.map((senator) => {
      return {name: senator.name, title: "Senator", party: senator.party, id: senator.id, nextElection: senator.next_election};
    })
    const namesArray = [{name: house.name, title: "Representative", party: house.party, id: house.id, nextElection: house.next_election}, ...senators];
    return namesArray;
  }

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      const representatives = this.listNames(this.props.senate, this.props.house);
      return (
        <div>
          <h2>Your Representatives</h2>
          <NavForRepresentatives representatives={representatives} onClick={this.handleClick}/>
          <Politician />
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
    fetchingId: state.representatives.isFetching,
    state: state.representatives.state,
    district: state.representatives.district,
    house: state.representatives.house,
    senate: state.representatives.senate,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPolitician
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Representatives);
