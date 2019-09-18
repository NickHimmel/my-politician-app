import React, { Component } from 'react';
import * as d3 from 'd3';
import { getPercentage, formatId } from '../utils/helpers.js';


class PieChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: formatId(this.props.id, this.props.type),
      data: getPercentage(this.props.data),
      label: this.props.label
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
      .domain(this.state.label)
      .range(['#98abc5', '#8a89a6',])

    const pie = d3.pie()
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
      .selectAll('label')
      .data(dataReady)
      .enter()
      .append('text')
        .text( function(d) { console.log(d.data.key) ; return d.data.key } )
        .attr('transform', function(d) {
            let pos = outerArc.centroid(d);
            let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return 'translate(' + pos + ')';
        })
        .style('text-anchor', function(d) {
            let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            return (midangle < Math.PI ? 'start' : 'end')
        })
  }

  render() {
    return (
      <div id={this.state.id}>
        <p>{this.props.label}</p>
      </div>
    );
  }
}

export default PieChart;
