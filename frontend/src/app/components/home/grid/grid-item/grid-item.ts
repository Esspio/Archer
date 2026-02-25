import { Component, Inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Title } from '../../../title/title';

@Component({
  selector: 'app-grid-item',
  imports: [NgComponentOutlet, Title],
  templateUrl: './grid-item.html',
  styleUrl: './grid-item.scss',
})
export class GridItem {
  constructor(
    @Inject('gridTitle') public gridTitle: string,
    @Inject('gridContent') public gridContent: any,
  ) {}
}
