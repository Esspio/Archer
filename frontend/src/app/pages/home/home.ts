import { RouteEnum } from './../../utils/RouteEnum';
import { Component, Output, EventEmitter, OnInit, Type } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgComponentOutlet } from '@angular/common';
import { GridItem } from '../../components/home/grid/grid-item/grid-item';
import { messages } from '../../utils/Messages_json';
import { Card } from '../../components/card/card';
import { LineChart } from '../../components/line-chart/line-chart';

export interface Tile {
  cols: number;
  rows: number;
  component: Type<GridItem>;
  inputs: Record<string, any>;
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
      component: GridItem,
      inputs: {
        gridTitle: messages['treinos.ultimos.seis.meses'],
        gridContent: LineChart,
      },
    },
    {
      cols: 2,
      rows: 2,
      component: GridItem,
      inputs: {
        gridTitle: messages['proximas.aulas'],
        gridContent: Card,
        gridContentInputs: [
          {
            titulo: '26/02/2026 - SUPERIORES',
            exibeBotao: false,
            contentHtml: `
            <b>Instrutor: Roberto</b>
          `,
          },
          {
            titulo: '26/02/2026 - SUPERIORES',
            exibeBotao: false,
            contentHtml: `
            <b>Instrutor: Roberto</b>
          `,
          },
          {
            titulo: '26/02/2026 - SUPERIORES',
            exibeBotao: false,
            contentHtml: `
            <b>Instrutor: Roberto</b>
          `,
          },
          {
            titulo: '26/02/2026 - SUPERIORES',
            exibeBotao: false,
            contentHtml: `
            <b>Instrutor: Roberto</b>
          `,
          },
          {
            titulo: '26/02/2026 - SUPERIORES',
            exibeBotao: false,
            contentHtml: `
            <b>Instrutor: Roberto</b>
          `,
          },
        ],
      },
    },
    {
      cols: 2,
      rows: 1,
      component: GridItem,
      inputs: {
        gridTitle: messages['sequencia.de.presenca'],
        gridContent: Card,
      },
    },
    {
      cols: 2,
      rows: 1,
      component: GridItem,
      inputs: {
        gridTitle: messages['avisos'],
        gridContent: Card,
      },
    },
  ];

  ngOnInit(): void {
    this.pageTitle.emit(RouteEnum.HOME.pageName);
  }
}
