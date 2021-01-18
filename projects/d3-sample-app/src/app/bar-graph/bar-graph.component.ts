import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { salesData } from './bar-graph-data';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  private svg;

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
  }

  private createSvg() {
    this.svg = d3.select('figure#bar')
                .selectAll('p')
                .data(salesData)
                .enter()
                .append('p')
                .text(d => d.day + '\'s best seller was ' + d.bestSeller + '. There were ' + d.sales + ' total sales!')
  }

}
