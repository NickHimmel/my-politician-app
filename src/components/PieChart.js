import React, { Component } from 'react';
import * as d3 from 'd3';

class PieChart extends Component {

  componentDidMount() {
    console.log(this.props.contributors)
    const width = 960,
          height = 500,
          radius = Math.min(width, height) / 2;

    const data = {a: 9, b: 20, c: 30, d: 8, e: 12, f: 15, g: 2, h: 23, i: 9, j: 18}

    const color = d3.scaleOrdinal()
      .domain(data)
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    const pie = d3.pie()
      .sort(null)
      .value(function(d) {
        return d.value;
      });

    const data_ready = pie(d3.entries(data))

    const arc = d3.arc()
        .innerRadius(radius - 100)
        .outerRadius(radius - 20);

    const svg = d3.select('#piechart')
      .append('svg')
        .attr('width', width)
        .attr('height', height)
      .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    svg
      .selectAll('path')
      .data(data_ready)
      .join('path')
      .attr('d', d3.arc()
        .innerRadius(100)
        .outerRadius(radius)
      )
      .attr('fill', function(d){return(color(d.data.key))})
  }

  render() {
    return (
      <div id="piechart"></div>
    );
  }
}

export default PieChart;
