import { RouteEnum } from './../../utils/RouteEnum';
import { Component, Output, EventEmitter, OnInit, Type } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgComponentOutlet } from '@angular/common';
import { GridItem } from '../../components/home/grid/grid-item/grid-item';

export interface Tile {
  cols: number;
  rows: number;
  color: string;
  component: Type<any> | undefined;
}

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, NgComponentOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  @Output() pageTitle = new EventEmitter<string>();

  tiles: Tile[] = [
    { cols: 4, rows: 1, color: 'lightblue', component: undefined },
    { cols: 2, rows: 2, color: 'lightgreen', component: GridItem },
    { cols: 2, rows: 1, color: 'lightpink', component: undefined },
    { cols: 2, rows: 1, color: '#DDBDF1', component: undefined },
  ];

  ngOnInit(): void {
    this.pageTitle.emit(RouteEnum.HOME.pageName);
  }
}
