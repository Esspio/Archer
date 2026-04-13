import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { DefaultTemplateLogin } from './components/default-template-login/default-template-login';
import { DefaultTemplatePages } from './components/default-template-pages/default-template-pages';

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
  {
    path: '',
    component: DefaultTemplatePages,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../app/pages/home/home').then((c) => c.Home),
      },
      {
        path: 'agendar-aula',
        loadComponent: () => import('./pages/agendar-aula/agendar-aula').then((c) => c.AgendarAula),
      },
    ],
  },
  {
    path: '',
    component: DefaultTemplateLogin,
    children: [
      {
        path: '**', //Caso nenhum Route acima seja satisfeita, este será utilizada (está em último devido a estratégia de "first match wins")
        loadComponent: () => import('../app/pages/error/error').then((c) => c.Error),
      },
    ],
  },
];
