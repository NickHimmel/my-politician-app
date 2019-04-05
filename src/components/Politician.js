import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolition } from '../actions/actions.js';

class Politician extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPolition
  },
  dispatch,
)

export default connect(
  null,
  mapDispatchToProps
)(Politician);
