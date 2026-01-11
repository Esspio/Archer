import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { CadastroUsuario } from './pages/cadastro-usuario/cadastro-usuario';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'cadastro-usuario',
    loadComponent: () =>
      import('../app/pages/cadastro-usuario/cadastro-usuario').then(
        (componente) => componente.CadastroUsuario,
      ),
  },
];
