import { messages } from './Messages_json';

export const MOOD_ICON_ENUM = {
  EXCELENTE: { icon: 'add_reaction', color: '#e3bc7b', message: messages['excelente'] },
  MUITO_BOM: { icon: 'sentiment_satisfied', color: '#08c008', message: messages['muito.bom'] },
  BOM: { icon: 'mood', color: '#6dd7f7', message: messages['bom'] },
  MEDIANO: { icon: 'mood_bad', color: '#f7b76d', message: messages['mediano'] },
  RUIM: { icon: 'sentiment_dissatisfied', color: '#f56767', message: messages['ruim'] },
  MUITO_RUIM: { icon: 'sentiment_frustrated', color: '#ff0000', message: messages['muito.ruim'] },
};

export type MoodIconValue = (typeof MOOD_ICON_ENUM)[keyof typeof MOOD_ICON_ENUM];
