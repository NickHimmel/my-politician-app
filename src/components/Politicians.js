import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import NavForPoliticians from './NavForPoliticians.js';
import Politician from './Politician.js';

class Politicians extends Component {

  handleClick = (e, id) => {
    this.props.fetchPolitician(id);
  }

  listNames = (senate, house) => {
    const senators = senate.map((senator) => {
      return {name: senator.name, title: "Senator", party: senator.party, id: senator.id };
    })
    const namesArray = [{name: house.name, title: "Representative", party: house.party, id: house.id}, ...senators];
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
          <NavForPoliticians representatives={representatives} onClick={this.handleClick}/>
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
    fetchingId: state.id.isFetching,
    state: state.id.state,
    district: state.id.district,
    house: state.id.house,
    senate: state.id.senate,
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
)(Politicians);
