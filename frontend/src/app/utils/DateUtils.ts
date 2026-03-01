export function obterMesesDoAnoAteHoje(locale: string = 'pt-BR'): string[] {
  const agora = new Date();
  const anoAtual = agora.getFullYear();
  const mesAtual = agora.getMonth();

  const meses: string[] = [];

  for (let i = 0; i <= mesAtual; i++) {
    const data = new Date(anoAtual, i, 1);

    const nomeMes = data.toLocaleDateString(locale, { month: 'long' });

    meses.push(nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1));
  }

  return meses;
}

export function getDataAtual(): { dia: number; mes: number; ano: number } {
  const agora = new Date();

  return {
    dia: agora.getDate(),
    mes: agora.getMonth() + 1,
    ano: agora.getFullYear(),
  };
}

export function getDiasDoMes(mes: number, ano: number): number[] {
  const ultimoDia = new Date(ano, mes, 0).getDate();

  const dias: number[] = [];

  for (let dia = 1; dia <= ultimoDia; dia++) {
    dias.push(dia);
  }

  return dias;
}

interface MesItem {
  numero: number;
  label: string;
}

export function obterUltimos6Meses(
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
