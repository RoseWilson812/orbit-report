import { Component } from '@angular/core';
import {Satellite} from './Satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          let satellite: object;
          for (let i = 0; i < fetchedSatellites.length; i++) {
               satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational); 
               this.sourceList.push(satellite);
            }
          // TODO: loop over satellites
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          this.displayList = this.sourceList.slice(0);   
       }.bind(this));
    }.bind(this));
 
 }

  // or: (they both do the same thing)
  //constructor() {
    //this.sourceList = [
      //new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
      //new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
      //new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
      //new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
      //new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
   //];
  //}

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    // assign this.displayList to be the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
 }
  
}

