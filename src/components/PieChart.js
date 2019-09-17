import React, { Component } from 'react';
import * as d3 from 'd3';
import { getPercentage, formatId } from '../utils/helpers.js';


class PieChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: formatId(this.props.id, this.props.type),
      data: getPercentage(this.props.data)
    }
  }

  componentDidMount() {

    const data = this.state.data;

    const width = 450,
          height = 450,
          margin = 40;

    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select('#' + this.state.id)
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const color = d3.scaleOrdinal()
      .domain(data)
      .range(['#98abc5', '#8a89a6',])

    const pie = d3.pie()
      .value(function(d) {return d.value;})

    const dataReady = pie(d3.entries(data))

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    svg
      .selectAll('path')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d){ return(color(d.data.key))})
      .attr('stroke', 'black')
      .style('stroke-width', '2px')
      .style('opacity', '0.7')
  }

  render() {
    return (
      <div id={this.state.id}>
      </div>
    );
  }
}

export default PieChart;
