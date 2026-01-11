export const RouteEnum = {
  LOGIN: 'login',
  CADASTRO_USUARIO: 'cadastro-usuario',
} as const;

export type RouteValue = (typeof RouteEnum)[keyof typeof RouteEnum];
