import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import NavItems from './NavItems.js';

class Nav extends Component {

  handleClick = (e, id, nextElection) => {
    const el = e.target;
    const current = document.getElementById('representative');
    current.removeAttribute('id');
    el.setAttribute('id', 'representative');
    this.props.fetchPolitician(id,nextElection);
  }

  render() {
    return (
      <div className='nav'>
        <NavItems house={this.props.house} senate={this.props.senate} onClick={this.handleClick}/>
      </div>
    )
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
)(Nav);
