import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecord } from '../actions/actions.js';
import Loading from './Loading.js';
import Intro from './Intro.js';
import Social from './Social.js';

class Politician extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
    }
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Loading />
        ) : (
          <div>
            <Intro state={this.props.state}/>
            <Social />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.politician)
  return {
    isFetching: state.politician.isFetching,
    id: state.politician.id,
    state: state.politician.state
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchRecord,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Politician);
