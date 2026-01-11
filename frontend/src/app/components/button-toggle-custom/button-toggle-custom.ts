import { Component, input, output } from '@angular/core';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';

interface optionTemplate {
  label: string;
  value: string;
}

@Component({
  selector: 'app-button-toggle-custom',
  imports: [MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './button-toggle-custom.html',
  styleUrl: './button-toggle-custom.scss',
})
export class ButtonToggleCustom {
  labelToggle = input.required<string>();
  options = input.required<optionTemplate[]>();
  selectedValue = output<string>();
  control = input<any>();

  onChange(optionValue: string) {
    this.selectedValue.emit(optionValue);
  }
}
