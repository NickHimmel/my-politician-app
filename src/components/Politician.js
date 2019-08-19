import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFinances } from '../actions/actions.js';
import Loading from './Loading.js';
import Social from './Social.js';
import NavSub from './NavSub.js';
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
    const el = e.target;
    const current = document.getElementById('nav-sub-active');
    hide.removeAttribute('id');
    current.removeAttribute('id');
    el.setAttribute('id', 'nav-sub-active');
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
        <div className='politician'>
          <Social url={this.props.politician.url} facebook={this.props.politician.facebook_account} twitter={this.props.politician.twitter_account} youtube={this.props.politician.youtube_account}/>
          <p className='label-light-blue politician-label'>Up for reelection in {this.props.nextElection}</p>
          <NavSub onClick={this.handleClick} />
          <Roles roles={this.props.roles} />
          <Votes votes={this.props.votes} />
          <Bills bills={this.props.bills} />
          <Finances cid={this.props.hasCid} votesmart={this.props.votesmart} finances={this.props.finances}/>
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
    finances: state.finances
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
