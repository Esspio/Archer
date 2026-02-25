import { RouteEnum } from './../../utils/RouteEnum';
import { Component, Output, EventEmitter, OnInit, Type, Injector } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgComponentOutlet } from '@angular/common';
import { GridItem } from '../../components/home/grid/grid-item/grid-item';
import { messages } from '../../utils/Messages_json';
import { Card } from '../../components/card/card';

export interface Tile {
  cols: number;
  rows: number;
  color: string;
  component: Type<GridItem>;
  gridTitle: string;
  gridContent: any;
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
    {
      cols: 4,
      rows: 1,
      color: 'lightblue',
      component: GridItem,
      gridTitle: '123',
      gridContent: Card,
    },
    {
      cols: 2,
      rows: 2,
      color: 'black',
      component: GridItem,
      gridTitle: messages['proximas.aulas'],
      gridContent: Card,
    },
    {
      cols: 2,
      rows: 1,
      color: 'lightpink',
      component: GridItem,
      gridTitle: '862',
      gridContent: Card,
    },
    {
      cols: 2,
      rows: 1,
      color: '#DDBDF1',
      component: GridItem,
      gridTitle: '526',
      gridContent: Card,
    },
  ];

  criarInjector(valorTitulo: string, valorContent: any): Injector {
    return Injector.create({
      providers: [
        { provide: 'gridTitle', useValue: valorTitulo },
        { provide: 'gridContent', useValue: valorContent },
      ],
    });
  }

  ngOnInit(): void {
    this.pageTitle.emit(RouteEnum.HOME.pageName);
  }
}
