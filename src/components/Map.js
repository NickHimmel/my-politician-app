import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      us: d3.json("us.json"),
      congress: d3.json("us-congress-116.json")
    }
  }

  componentDidMount() {

    const width = 960,
          height = 600;

    const projection = d3.geoAlbersUsa()
        .scale(1280)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath(projection);

    const svg = d3.select("#container").append("svg")
      .attr("preserveAspectRatio", "xMidYMid")
      .attr("viewBox", "0 0 " + width + " " + height);

    Promise.all([this.state.us, this.state.congress]).then(values => {
      const us = values[0];
      const congress = values[1];

      svg.append("defs").append("path")
          .attr("id", "land")
          .datum(topojson.feature(us, us.objects.land))
          .attr("d", path);

      svg.append("clipPath")
          .attr("id", "clip-land")
        .append("use")
          .attr("xlink:href", "#land");

      svg.append("g")
          .attr("class", "districts")
          .attr("clip-path", "url(#clip-land)")
        .selectAll("path")
          .data(topojson.feature(congress, congress.objects.districts).features)
        .enter().append("path")
          .attr("d", path)
        .append("title")
          .text(function(d) { return d.id; });

      svg.append("path")
          .attr("class", "district-boundaries")
          .datum(topojson.mesh(congress, congress.objects.districts, function(a, b) { return a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0); }))
          .attr("d", path);

      svg.append("path")
          .attr("class", "state-boundaries")
          .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
          .attr("d", path);

      // d3.select(window)
      //   .on("resize", sizeChange);
      //
      // function sizeChange() {
      //   const container = document.getElementById("container")
      //   svg.attr("transform", "scale(" + container.offsetWidth/960 + ")");
      // }
    }).catch(error => {
      console.log(error.message)
    });

    d3.select(window.self.frameElement).style("height", height + "px");
  }

  render() {
    return (
      <div id="container">
        <h1>116th United States Congressional Districts</h1>
      </div>
    );
  }
}

export default Map;
