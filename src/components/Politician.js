import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import Intro from './Intro.js';
import Social from './Social.js';
import Roles from './Roles.js';

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
        console.log(this.props.roles)
      return (
        <div>
          <Intro state={this.props.state} nextElection={this.props.nextElection} name={this.props.name} party={this.props.politician.current_party} district={this.props.district}/>
          <Social social={this.props.politician} />
          <Roles roles={this.props.roles}/>
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
    id: state.id.id,
    name: state.id.name,
    district: state.id.district,
    nextElection: state.id.nextElection,
    state: state.id.state,
    fetchingPolitician: state.politician.isFetching,
    politician: state.politician.politician,
    roles: state.politician.roles,
    votes: state.politician.votes,
    bills: state.politician.bills
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
