import { RouteEnum } from './../../utils/RouteEnum';
import { Component, Output, EventEmitter, OnInit, Type, Injector } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgComponentOutlet } from '@angular/common';
import { GridItem } from '../../components/home/grid/grid-item/grid-item';

export interface Tile {
  cols: number;
  rows: number;
  color: string;
  component: Type<GridItem>;
  inputSignalTitulo: string;
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
    { cols: 4, rows: 1, color: 'lightblue', component: GridItem, inputSignalTitulo: '123' },
    { cols: 2, rows: 2, color: 'black', component: GridItem, inputSignalTitulo: '999' },
    { cols: 2, rows: 1, color: 'lightpink', component: GridItem, inputSignalTitulo: '862' },
    { cols: 2, rows: 1, color: '#DDBDF1', component: GridItem, inputSignalTitulo: '526' },
  ];

  criarInjector(valorTitulo: string): Injector {
    return Injector.create({
      providers: [{ provide: 'titulo', useValue: valorTitulo }],
    });
  }

  ngOnInit(): void {
    this.pageTitle.emit(RouteEnum.HOME.pageName);
  }
}
