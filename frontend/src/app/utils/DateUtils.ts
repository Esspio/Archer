export function getDataAtual(): { dia: number; mes: number; ano: number } {
  const agora = new Date();

  return {
    dia: agora.getDate(),
    mes: agora.getMonth() + 1,
    ano: agora.getFullYear(),
  };
}

interface MesItem {
  numero: number;
  label: string;
}

export function getUltimosSeisMesesConformeMesAtual(
  mesAtual: number,
  anoAtual: number,
  locale: string = 'pt-BR',
): MesItem[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });

  const meses: MesItem[] = [];

  for (let i = 5; i >= 0; i--) {
    const data = new Date(anoAtual, mesAtual - 1 - i, 1);

    const numeroMes = data.getMonth() + 1;
    const nomeMes = formatter.format(data);
    const anoDoMes = data.getFullYear().toString().slice(-2);

    meses.push({
      numero: numeroMes,
      label: nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1) + '/' + anoDoMes,
    });
  }

  return meses;
}
