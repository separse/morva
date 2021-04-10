import { Component, OnInit } from '@angular/core';
// import d3 from 'd3v4';
import * as d3 from 'd3';


@Component({
  selector: 'app-d3-test',
  templateUrl: './d3-test.component.html',
  styleUrls: ['./d3-test.component.scss'],
})
export class D3TestComponent implements OnInit {
width = 440
height = 600
radius = 32
  ngOnInit(): void {
// set the dimensions and margins of the graph
let hart = {
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, this.width, this.height])
      .attr("stroke-width", 2);

  circles = d3.range(20).map(i => ({
    x: Math.random() * (this.width - this.radius * 2) + this.radius,
    y: Math.random() * (this.height - this.radius * 2) + this.radius,
    index: i
  }));

  svg.selectAll("circle")
    .data(this.circles)
    .join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", this.radius)
      .attr("fill", d => d3.schemeCategory10[d.index % 10])
      .call(drag)
      .on("click", clicked);

  function clicked(event, d) {
    if (event.defaultPrevented) return; // dragged

    d3.select(this).transition()
        .attr("fill", "black")
        .attr("r", radius * 2)
      .transition()
        .attr("r", radius)
        .attr("fill", d3.schemeCategory10[d.index % 10]);
  }

  return svg.node();
}
  }
}


