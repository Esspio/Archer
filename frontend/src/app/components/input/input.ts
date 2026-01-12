import { Component, input, signal } from '@angular/core';
import { Field } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const INPUT_TYPES = {
  TEXT: 'text',
  PASSWORD: 'password',
  NUMBER: 'number',
  DATE: 'date',
};

@Component({
  selector: 'app-input',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, Field],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  type = input.required<string>();
  name = input.required<string>();
  label = input.required<string>();
  placeholder = input<string | undefined>();
  icon = input.required<string>();
  showPassword = signal<boolean>(false);
  class = input<string>();
  control = input<any>();

  clickShowPassword(event: Event) {
    this.showPassword.set(!this.showPassword());
    event.stopPropagation();
  }

  getInputType(): string {
    if (this.type() === INPUT_TYPES.PASSWORD) {
      return this.showPassword() ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD;
    }

    return this.type();
  }

  onIconClick(event: Event) {
    this.clickShowPassword(event);
  }
}
