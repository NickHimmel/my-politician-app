import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolitician } from '../actions/actions.js';
import Loading from './Loading.js';
import Intro from './Intro.js';
import Social from './Social.js';

class Politician extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id && this.props.isFetching === false) {
      this.props.fetchPolitician(this.props.id)
    }
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Loading />
        ) : (
          <div>
            <Intro state={this.props.state} nextElection={this.props.nextElection}/>
            <Social />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isFetching: state.id.isFetching,
    id: state.id.id,
    nextElection: state.id.nextElection,
    state: state.id.state,
    data: state.politician.data
  };
};

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPolitician,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Politician);
