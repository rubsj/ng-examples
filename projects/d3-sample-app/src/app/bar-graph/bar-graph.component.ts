import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Sales, salesData } from './bar-graph-data';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private padding = 100;
  private barPadding = 5;

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(salesData);
  }

  private createSvg() {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", `translate(${this.margin} , ${this.margin})`);
  }

  private drawBars(data: Sales[]): void {
    let xScale = d3.scaleBand()
                  .domain(data.map((dataObj: Sales)=> dataObj.day))
                  .range([0, this.width])
                  .padding(0.2);
    const yScale = d3.scaleLinear()
                     .domain([0 , d3.max(data , (dataObj: Sales)=> dataObj.sales)])
                     .range([0 ,this.height]);
                     
    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale).ticks(5);

    this.svg.append('g').attr('transform' , `translate(0 , ${this.height})`).call(xAxis);
    this.svg.append('g').call(yAxis);

    this.svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .on('click' , (event : any , dataObj: Sales )=>alert(`Best Seller ${dataObj.bestSeller} , with sales ${dataObj.sales}`))
      .attr('x', (dataObj: Sales, index: number) => index * (this.width / data.length))
      .attr('y', (dataObj: Sales) => this.height - yScale(dataObj.sales))
      .attr('width', this.width / data.length - this.barPadding)
      .attr('height', (dataObj: Sales) => yScale(dataObj.sales))
      .attr('fill' , '#3399ff')
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
      .attr('fill', (dataObj: Sales) => {
        let max = d3.max(data, (dataObj: Sales) => dataObj.sales);
        let min = d3.min(data, (dataObj: Sales) => dataObj.sales);
        if (dataObj.sales === min) {
          return '#ff3300';
        } else if (dataObj.sales === max) {
          return '#66ff66';
        } else {
          return '#3399ff';
        }
      });

      this.svg.selectAll('text.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .text((dataObj: Sales) => dataObj.sales)
      .attr('text-anchor', 'middle')
      .attr('x', (d, i) => {
        return i * (this.width / data.length) + (this.width / data.length - this.barPadding)/ 2;
      })
      .attr('y', (dataObj: Sales) => this.height - yScale(dataObj.sales) + 15 )
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white');
  }

}
