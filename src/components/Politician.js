import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import Title from './Title.js';
import Social from './Social.js';
import Roles from './Roles.js';
import Votes from './Votes.js';
import Bills from './Bills.js';

class Politician extends Component {

  componentDidMount() {
    this.props.fetchPolitician(this.props.data.id);
  }

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      console.log(this.props.bills)
      return (
        <div>
          <Title name={this.props.data.name} party={this.props.data.party} nextElection={this.props.data.next_election} />
          <Social facebook={this.props.data.facebook_account} twitter={this.props.data.twitter_id} youtube={this.props.data.youtube_id} />
          <Roles roles={this.props.politician.roles} />
          <Votes votes={this.props.votes} />
          <Bills bills={this.props.bills} />
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
    fetchingId: state.politician.isFetching,
    politician: state.politician.politician,
    roles: state.politician.roles,
    votes: state.politician.votes,
    bills: state.politician.bills
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
)(Politician);
