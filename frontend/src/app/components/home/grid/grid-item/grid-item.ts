import { Component, input, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Title } from '../../../title/title';

@Component({
  selector: 'app-grid-item',
  imports: [NgComponentOutlet, Title],
  templateUrl: './grid-item.html',
  styleUrl: './grid-item.scss',
})
export class GridItem {
  gridTitle = input<string>();
  gridContent = input.required<Type<any>>();
  gridContentInputs = input<Record<string, any>[]>([]);
}
