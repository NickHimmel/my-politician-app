import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPolition } from '../actions/actions.js';
import Loading from './Loading.js'
import Header from './Header.js'

class Politician extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      console.log("bang")
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.isFetching ? (
          <Loading />
        ) : (
          <Header data={this.props.politician}/>
        )}
      </div>
    );
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
