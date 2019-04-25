import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading.js';
import Politician from './Politician.js';

class Politicians extends Component {

  renderNames = () => {
    const senators = this.props.senate.map((senator) => {
      return {name: senator.name, title: "Senator"};
    })
    const namesArray = [{name: this.props.house.name, title: "Representative"}, ...senators];
    return namesArray;
  }

  render() {
    if (this.props.fetchingId) {
      return (
        <Loading />
      )
    } else if (this.props.fetchingId === false) {
      const representatives = this.renderNames();
      return (
        <div>
          <h2>Your Representatives</h2>
          <Politician data={this.props.house} id={this.props.house.id}/>
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
    fetchingId: state.id.isFetching,
    state: state.id.state,
    district: state.id.district,
    house: state.id.house,
    senate: state.id.senate,
  };
};

export default connect(
  mapStateToProps
)(Politicians);
