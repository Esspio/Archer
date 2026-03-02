import { Component, signal } from '@angular/core';
import { Input } from '../../components/input/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { form, minLength, required } from '@angular/forms/signals';
import { ButtonToggleCustom } from '../../components/button-toggle-custom/button-toggle-custom';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Roteamento } from '../../utils/Roteamento';
import { Router } from '@angular/router';
import { RouteEnum, type RouteValue } from '../../utils/RouteEnum';

interface LoginForm {
  login: string;
  senha: string;
  tipoAcesso: string;
}

@Component({
  selector: 'app-login',
  imports: [
    Input,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    ButtonToggleCustom,
    MatFormFieldModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login extends Roteamento {
  public RouteEnum = RouteEnum;

  constructor(router: Router) {
    super(router);
  }

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

    const user = {
      personName: 'Felipe',
    };

    sessionStorage.setItem('userData', JSON.stringify(user));

    this.navigateTo(RouteEnum.HOME);
  }

  updateFormValue(selectedValue: string) {
    this.loginForm().tipoAcesso = selectedValue;
  }

  navigateTo(rota: RouteValue): void {
    super.navigate(rota);
  }
}
