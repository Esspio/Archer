import { messages } from './Messages_json';

export const RouteEnum = {
  LOGIN: { url: 'login', pageName: messages['login'] },
  CADASTRO_USUARIO: { url: 'cadastro-usuario', pageName: messages['cadastrar.usuario'] },
  HOME: { url: 'home', pageName: messages['home'] },
  MINHA_CONTA: { url: 'minha-conta', pageName: messages['minha.conta'] },
  TROCAR_SENHA: { url: 'trocar-senha', pageName: messages['trocar.senha'] },
  MINHA_AGENDA: { url: 'minhas-aulas', pageName: messages['minha.agenda'] },
  AGENDAR_AULA: { url: 'agendar-aula', pageName: messages['agendar.aula'] },
  REAGENDAR_AULA: { url: 'reagendar-aula', pageName: messages['reagendar.aula'] },
  CANCELAR_AULA: { url: 'cancelar-aula', pageName: messages['cancelar.aula'] },
  PREFERENCIAS_CONTA: { url: 'preferencias', pageName: messages['preferencias'] },
  LOGOUT: { url: 'logout', pageName: messages['logout'] },
} as const;

export type RouteValue = (typeof RouteEnum)[keyof typeof RouteEnum];
