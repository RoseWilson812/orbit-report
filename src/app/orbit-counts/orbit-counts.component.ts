import { Component, OnInit } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
 satelliteTotals: number[]; 
 displayNames: string[];
 displayList: Satellite[];
  constructor() {}

  ngOnInit() {
  }
  
  

}
