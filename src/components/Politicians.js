import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closePolitician, fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import ButtonClose from './ButtonClose.js';
import NavHeader from './NavHeader.js';
import Politician from './Politician.js';

class Politicians extends Component {

  handleClose = () => {
    this.props.closePolitician();
  }

  handleClick = (e, id, nextElection) => {
    const el = e.target;
    const current = document.getElementById('representative');
    current.removeAttribute('id');
    el.setAttribute('id', 'representative');
    this.props.fetchPolitician(id,nextElection);
  }

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      return (
        <div className='representatives'>
          <ButtonClose onClick={this.handleClose}/>
          <h2>{this.props.state}'s {this.props.district} District</h2>
          <NavHeader house={this.props.house} senate={this.props.senate} onClick={this.handleClick}/>
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
    fetchingId: state.politicians.isFetching,
    state: state.politicians.state,
    district: state.politicians.district,
    house: state.politicians.house,
    senate: state.politicians.senate,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    closePolitician,
    fetchPolitician
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Politicians);
