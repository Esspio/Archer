export const RouteEnum = {
  LOGIN: 'login',
  CADASTRO_USUARIO: 'cadastro-usuario',
  HOME: 'home',
  MINHA_CONTA: 'minha-conta',
  TROCAR_SENHA: 'trocar-senha',
  MINHAS_AULAS: 'minhas-aulas',
  AGENDAR_AULA: 'agendar-aula',
  REAGENDAR_AULA: 'reagendar-aula',
  CANCELAR_AULA: 'cancelar-aula',
  PREFERENCIAS_CONTA: 'preferencias',
  LOGOUT: 'logout',
} as const;

export type RouteValue = (typeof RouteEnum)[keyof typeof RouteEnum];
