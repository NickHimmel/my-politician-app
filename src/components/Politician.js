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

  handleClick = (e, info) => {
    const hide = document.getElementById('active');
    hide.removeAttribute('id');
    const show = document.getElementsByClassName(info);
    show[0].setAttribute('id', 'active');
  }

  render() {
    if (this.props.fetchingPolitician) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingPolitician === false) {
      return (
        <div>
          <Name firstName={this.props.politician.first_name} lastName={this.props.politician.last_name} party={this.props.politician.current_party}/>
          <Social url={this.props.politician.url} facebook={this.props.politician.facebook_account} twitter={this.props.politician.twitter_account} youtube={this.props.politician.youtube_account}/>
          <NavForPolitician onClick={this.handleClick} />
          <Roles roles={this.props.roles} />
          <Votes votes={this.props.votes} />
          <Bills bills={this.props.bills} />
          <Finances />
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
    fetchingPolitician: state.politician.isFetching,
    politician: state.politician.politician,
    roles: state.politician.roles,
    votes: state.politician.votes,
    bills: state.politician.bills,
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
