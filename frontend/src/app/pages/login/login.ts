import { Component, signal } from '@angular/core';
import { Input } from '../../components/input/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { form, minLength, required } from '@angular/forms/signals';
import { ButtonToggleCustom } from '../../components/button-toggle-custom/button-toggle-custom';

interface LoginForm {
  login: string;
  senha: string;
  tipoAcesso: string;
}

@Component({
  selector: 'app-login',
  imports: [Input, MatCheckboxModule, MatButtonModule, MatButtonToggleModule, ButtonToggleCustom],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = signal<LoginForm>({
    login: '',
    senha: '',
    tipoAcesso: '0',
  });

  form = form(this.loginForm, (v) => {
    required(v.login);
    required(v.senha);
    minLength(v.senha, 8);
    required(v.tipoAcesso);
  });

  submit(event: Event) {
    event.preventDefault();
    console.log('foi');
    console.log(this.loginForm());
  }

  updateFormValue(selectedValue: string) {
    this.loginForm().tipoAcesso = selectedValue;
  }
}
