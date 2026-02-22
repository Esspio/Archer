import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  cols: number;
  rows: number;
  color: string;
}

@Component({
  selector: 'app-home',
  imports: [MatGridListModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  tiles: Tile[] = [
    { cols: 3, rows: 1, color: 'lightblue' },
    { cols: 1, rows: 2, color: 'lightgreen' },
    { cols: 1, rows: 1, color: 'lightpink' },
    { cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}
