import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFinances } from '../actions/actions.js';
import Loading from './Loading.js';
import Name from './Name.js';
import Social from './Social.js';
import NavForPolitician from './NavForPolitician.js';
import Roles from './Roles.js';
import Votes from './Votes.js';
import Bills from './Bills.js';
import Finances from './Finances.js';

class Politician extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.fetchFinances(this.props.id)
    }
  }

  handleClick = (e, info) => {
    const hide = document.getElementById('active');
    hide.removeAttribute('id');
    const show = document.getElementsByClassName(info);
    show[0].setAttribute('id', 'active');
  }

  render() {
    if (this.props.fetchingPolitician || this.props.fetchingFinances) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingPolitician === false && this.props.fetchingFinances === false) {
      return (
        <div>
          <Name firstName={this.props.politician.first_name} lastName={this.props.politician.last_name} party={this.props.politician.current_party} nextElection={this.props.nextElection}/>
          <Social url={this.props.politician.url} facebook={this.props.politician.facebook_account} twitter={this.props.politician.twitter_account} youtube={this.props.politician.youtube_account}/>
          <NavForPolitician onClick={this.handleClick} />
          <Roles roles={this.props.roles} />
          <Votes votes={this.props.votes} />
          <Bills bills={this.props.bills} />
          <Finances cid={this.props.hasCid} votesmart={this.props.votesmart} summary={this.props.summary} />
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
    id: state.id.id,
    votesmart: state.id.votesmart,
    fetchingPolitician: state.politician.isFetching,
    fetchingFinances: state.finances.isFetching,
    politician: state.politician.politician,
    nextElection: state.politician.nextElection,
    roles: state.politician.roles,
    votes: state.politician.votes,
    bills: state.politician.bills,
    hasCid: state.finances.hasCid,
    summary: state.finances.summary
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchFinances
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Politician);
