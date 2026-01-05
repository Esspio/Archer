import { Component } from '@angular/core';
import { Input } from '../../components/input/input';

@Component({
  selector: 'app-login',
  imports: [Input],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {}
