import { Component, input } from '@angular/core';

let ISIZE: 'big' | 'normal';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  title = input.required<string>();
  size = input<typeof ISIZE>();
}
