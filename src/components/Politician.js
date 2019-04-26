import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading.js';
import Name from './Name.js';
import Social from './Social.js';
import NavForPolitician from './NavForPolitician.js';
import Roles from './Roles.js';
import Votes from './Votes.js';
import Bills from './Bills.js';

class Politician extends Component {

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      console.log(this.props.politician)
      return (
        <div>
          <Name firstName={this.props.politician.first_name} lastName={this.props.politician.last_name} party={this.props.politician.current_party}/>
          <Social url={this.props.politician.url} facebook={this.props.politician.facebook_account} twitter={this.props.politician.twitter_account} youtube={this.props.politician.youtube_account}/>
          <NavForPolitician />
          <Roles roles={this.props.roles} />
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

export default connect(
  mapStateToProps
)(Politician);
