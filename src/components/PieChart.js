import React, { Component } from 'react';
import * as d3 from 'd3';
import { getPercentage } from '../utils/helpers.js';

class PieChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6),
      data: getPercentage(this.props.data),
    }
  }

  componentDidMount() {

    const width = 150,
          height = 150,
          margin = 10;

    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select('#' + this.state.id)
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const color = d3.scaleOrdinal()
      .domain(this.state.data)
      .range(['#98abc5', '#8a89a6',])

    const pie = d3.pie()
      .sort(null)
      .value(function(d) {return d.value;})

    const dataReady = pie(d3.entries(this.state.data))

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    const outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9)

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

    svg
      .selectAll('polylines')
      .data(dataReady)
      .enter()
      .append('polyline')
        .attr('class', function(d) { return d.data.key })
        .attr('stroke', 'black')
        .style('fill', 'none')
        .attr('stroke-width', 1)
        .attr('points', function(d) {
          let posA = arc.centroid(d)
          let posB = outerArc.centroid(d)
          let posC = outerArc.centroid(d);
          let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
          return [posA, posB, posC]
        })
  }

  render() {
    return (
      <div className='piechart flex flex-center flex-column'>
        <div id={this.state.id}></div>
        <p className='small-type'>{this.props.label}</p>
        <h3 className={this.props.type}>{this.props.data}%</h3>
      </div>
    );
  }
}

export default PieChart;
