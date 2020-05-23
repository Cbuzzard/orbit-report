import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnChanges {
  
  @Input() satellites: Satellite[];
  typeCount: {
    'Space Debris': number,
    'Communication': number,
    'Probe': number,
    'Positioning': number,
    'Space Station': number,
    'Telescope': number
  }

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.typeCount = {
      'Space Debris': 0,
      'Communication': 0,
      'Probe': 0,
      'Positioning': 0,
      'Space Station': 0,
      'Telescope': 0
    }
    this.satellites.forEach(satellite => {this.typeCount[satellite.type]++})
  }

}
