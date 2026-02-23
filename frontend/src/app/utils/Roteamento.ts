import { Router } from '@angular/router';
import type { RouteValue } from './RouteEnum';

export class Roteamento {
  constructor(protected router: Router) {}

  navigate(rota: RouteValue): void {
    this.router.navigateByUrl(rota.url);
  }
}
