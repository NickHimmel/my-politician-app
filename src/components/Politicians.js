import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closePolitician, fetchPolitician } from '../actions/actions.js';
import { getOrdinal } from '../utils/helpers.js';
import Loading from './Loading.js';
import ButtonClose from './ButtonClose.js';
import NavHeader from './NavHeader.js';
import Politician from './Politician.js';

class Politicians extends Component {

  handleClose = () => {
    this.props.closePolitician();
  }

  handleClick = (e, id, nextElection) => {
    const targetButton = e.target.parentElement;
    const activeButton = document.getElementById('active-button');
    activeButton.removeAttribute('id');
    targetButton.querySelector('p').setAttribute('id', 'active-button');
    this.props.fetchPolitician(id,nextElection);
  }

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      const district = getOrdinal(this.props.district)
      return (
        <div className='politicians'>
          <ButtonClose onClick={this.handleClose}/>
          <p className='district label'>{this.props.state}'s {district} District</p>
          <NavHeader house={this.props.house} senatorOne={this.props.senate[0]} senatorTwo={this.props.senate[1]} onClick={this.handleClick}/>
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
