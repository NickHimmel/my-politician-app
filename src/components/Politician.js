import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolition } from '../actions/actions.js';

class Politician extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    console.log(this.props)
    if (this.props.isFetching) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.politician.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.politician.isFetching,
    politician: state.politician.politician,
    id: state.politician.id
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
