import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import Button from './Button.js';
import Nav from './Nav.js';
import Politician from './Politician.js';

class Representatives extends Component {

  handleClick = () => {
  }

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      return (
        <div className='representatives'>
          <h2>{this.props.state}'s {this.props.district} District</h2>
          <Nav house={this.props.house} senate={this.props.senate}/>
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
    id: state.id.id,
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
