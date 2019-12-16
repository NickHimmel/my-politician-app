import React, { Component } from 'react';
import Header from './Header.js';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPoliticians } from '../actions/actions.js';
import { getOrdinal, removeZero, scrollTop } from '../utils/helpers.js';

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      us: d3.json('us.json'),
      congress: d3.json('us-congress-116.json'),
      fips: d3.json('states_by_fips.json')
    }
  }

  componentDidMount() {
    const fetchPoliticians = this.props.fetchPoliticians;

    const width = 960,
          height = 600;

    const projection = d3.geoAlbersUsa()
        .scale(1280)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath(projection);

    const svg = d3.select('#container').append('svg')
      .attr('preserveAspectRatio', 'xMidYMid')
      .attr('viewBox', '0 0 ' + width + ' ' + height)

    const toolTip = d3.select('.tooltip')

    Promise.all([this.state.us, this.state.congress, this.state.fips]).then(values => {
      const us = values[0],
            congress = values[1],
            fips = values[2],
            g = svg.append('g');

      const zoom = d3.zoom()
        .scaleExtent([1, 24])
        .on('zoom', () => {
            g.attr('transform', d3.event.transform)
        })

      svg.append('defs').append('path')
          .attr('id', 'land')
          .datum(topojson.feature(us, us.objects.land))
          .attr('d', path);

      svg.append('clipPath')
          .attr('id', 'clip-land')
        .append('use')
          .attr('xlink:href', '#land');

      g
          .attr('class', 'districts')
          .attr('clip-path', 'url(#clip-land)')
        .selectAll('path')
          .data(topojson.feature(congress, congress.objects.districts).features)
        .enter().append('path')
          .attr('d', path)
          .on('click', function(data) {
            const abbreviation = fips[data.properties.STATEFP].abbreviation;
            const state = fips[data.properties.STATEFP].name;
            let district = data.properties.CD116FP;
            if (district === '00' || district === '98') district = '01';
            scrollTop();
            fetchPoliticians(abbreviation, state, district);
          })
          .on('mouseover', function(data) {
            const state = fips[data.properties.STATEFP].name;
            let districtNumber = getOrdinal(data.properties.CD116FP);
            if (districtNumber === '00th') districtNumber = 'At-large'
            let district = removeZero(districtNumber);
            toolTip.transition()
              .duration(200)
              .style('opacity', .9);
            toolTip.html('<span class="label">' + state + '&#39s ' +  district + ' Congressional District </span>');
          })
          .on('mouseout', function(data) {
            toolTip.transition()
              .duration(200)
              .style('opacity', 0);
          })
        .append('title')
          .text(function(d) { return d.id; });

      g.append('path')
        .attr('class', 'state-boundaries')
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr('d', path);

      svg.call(zoom)

    }).catch(error => {
      console.log(error.message)
    });

    d3.select(window.self.frameElement).style('height', height + 'px');
  }

  render() {
    return (
      <div className='map'>
        <Header />
        <div id='container'></div>
        <div>
          <span className='tooltip label'>Click on your district to find information for your representative and state senators</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators (
  {
    fetchPoliticians
  },
  dispatch,
)

export default connect(
  null,
  mapDispatchToProps
)(Map);
