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
    console.log(this.props);
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.politician.isFetching,
    politician: state.politician.politician
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPolition
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Politician);
