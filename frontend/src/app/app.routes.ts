import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { DefaultTemplateLogin } from './components/default-template-login/default-template-login';

export const routes: Routes = [
  {
    path: '',
    component: DefaultTemplateLogin,
    children: [
      { path: '', component: Login },
      { path: 'login', component: Login },
      {
        path: 'cadastro-usuario',
        loadComponent: () =>
          import('../app/pages/cadastro-usuario/cadastro-usuario').then((c) => c.CadastroUsuario),
      },
    ],
  },
];
