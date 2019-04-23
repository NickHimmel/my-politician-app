import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Title from './Title.js';
import Social from './Social.js';

class Politician extends Component {

  componentDidMount() {
    this.props.fetchPolitician(this.props.politician.id);
  }

  render() {
    return (
      <div>
        <Title name={this.props.politician.name} party={this.props.politician.party} nextElection={this.props.politician.next_election} />
        <Social facebook={this.props.politician.facebook_account} twitter={this.props.politician.twitter_id} youtube={this.props.politician.youtube_id} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPolitician
  },
  dispatch,
)

export default connect(
  null,
  mapDispatchToProps
)(Politician);
