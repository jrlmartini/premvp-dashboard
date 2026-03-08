export const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export const kpiHome = [
  { label: 'Vendas vs previsão', value: 0.945, type: 'percent', delta: '+2,1 pp vs mês anterior', status: 'warning' },
  { label: 'Fluxo de caixa', value: 18400000, type: 'currency', delta: '+R$ 1,3M em 30 dias', status: 'success' },
  { label: 'Geração operacional de caixa', value: 3200000, type: 'currency', delta: '+14,6% M/M', status: 'success' },
  { label: 'Clientes ativos', value: 286, type: 'number', delta: '+18 no ano', status: 'success' },
  { label: 'Margem bruta', value: 0.312, type: 'percent', delta: '-0,8 pp vs meta', status: 'warning' },
  { label: 'EBITDA', value: 0.168, type: 'percent', delta: '+1,4 pp no ano', status: 'success' }
] as const

export const salesTrend = months.map((month, i) => ({ month, revenue: [7.8, 8.2, 8.6, 8.9, 9.4, 9.1, 9.9, 10.4, 10.6, 11, 11.2, 11.8][i], target: [8, 8.3, 8.5, 8.8, 9.1, 9.3, 9.6, 10, 10.2, 10.7, 10.9, 11.4][i] }))
export const cashTrend = months.slice(0, 10).map((month, i) => ({ month, inflow: [4.2, 4.4, 4.1, 4.6, 4.8, 4.5, 5, 5.2, 5, 5.4][i], outflow: [3.5, 3.6, 3.8, 3.7, 4, 3.9, 4.1, 4.3, 4.2, 4.4][i] }))

export const revenueByUnit = [
  { name: 'Tratamento de água', value: 42 },
  { name: 'Tecnologia ambiental', value: 27 },
  { name: 'Soluções industriais', value: 19 },
  { name: 'Automação digital', value: 12 }
]

export const rfmData = [
  { segment: 'Campeões', customers: 54, share: 31 },
  { segment: 'Leais', customers: 88, share: 29 },
  { segment: 'Potenciais', customers: 64, share: 18 },
  { segment: 'Em risco', customers: 52, share: 14 },
  { segment: 'Perdidos', customers: 28, share: 8 }
]

export const topCustomers = [
  ['AquaNord Industria', 'R$ 5,2M', '11,4%', 'Baixo'],
  ['BioEixo Saneamento', 'R$ 4,8M', '10,5%', 'Médio'],
  ['VerdeMax Papel', 'R$ 3,9M', '8,6%', 'Baixo'],
  ['Mineral Cromo SA', 'R$ 3,5M', '7,7%', 'Alto'],
  ['Alpha Alimentos', 'R$ 2,7M', '6,1%', 'Médio']
]

export const alerts = [
  'DSO subiu para 58 dias no cluster Mineração (meta 50).',
  '3 contratos estratégicos vencem em até 45 dias; renovar com margem mínima de 28%.',
  'SLA da unidade Sul caiu para 92,6% devido a backlog de manutenção.'
]

export const highlights = [
  'Pipeline comercial atingiu R$ 14,2M (+17% vs trimestre anterior).',
  'Projeto de automação de dosagem reduziu custo operacional em 6,4% nas plantas piloto.',
  'Programa técnico trilha 2026 já possui 78% de adesão da equipe de operações.'
]

export const processIssues = [
  ['PL-442', 'Atraso em reposição de bombas', 'Sul', 'Alto', '5 dias'],
  ['PL-447', 'Ruptura em insumo coagulante', 'Nordeste', 'Médio', '2 dias'],
  ['PL-450', 'Fila de calibração sensores', 'Sudeste', 'Alto', '8 dias'],
  ['PL-452', 'Desvio em prazo de coleta', 'Centro-Oeste', 'Médio', '3 dias']
]

export const strategicProjects = [
  ['Nova planta de blending', 'Capex / Operações', '76%', 'No prazo'],
  ['CRM comercial 2.0', 'Clientes', '61%', 'Atenção'],
  ['Programa GreenLab', 'Inovação', '84%', 'No prazo'],
  ['Academia técnica operacional', 'Pessoas', '69%', 'No prazo']
]
