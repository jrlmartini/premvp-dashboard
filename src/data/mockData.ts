export const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export const kpiHome = [
  { label: 'Sales vs forecast', value: 0.945, type: 'percent', delta: '+2,1 pp vs mês anterior', status: 'warning' },
  { label: 'Cash flow', value: 18400000, type: 'currency', delta: '+R$ 1,3M em 30 dias', status: 'success' },
  { label: 'Operational cash generation', value: 3200000, type: 'currency', delta: '+14,6% M/M', status: 'success' },
  { label: 'Active customers', value: 286, type: 'number', delta: '+18 YTD', status: 'success' },
  { label: 'Gross margin', value: 0.312, type: 'percent', delta: '-0,8 pp vs meta', status: 'warning' },
  { label: 'EBITDA', value: 0.168, type: 'percent', delta: '+1,4 pp YTD', status: 'success' }
] as const

export const salesTrend = months.map((month, i) => ({ month, revenue: [7.8, 8.2, 8.6, 8.9, 9.4, 9.1, 9.9, 10.4, 10.6, 11, 11.2, 11.8][i], target: [8, 8.3, 8.5, 8.8, 9.1, 9.3, 9.6, 10, 10.2, 10.7, 10.9, 11.4][i] }))
export const cashTrend = months.slice(0, 10).map((month, i) => ({ month, inflow: [4.2, 4.4, 4.1, 4.6, 4.8, 4.5, 5, 5.2, 5, 5.4][i], outflow: [3.5, 3.6, 3.8, 3.7, 4, 3.9, 4.1, 4.3, 4.2, 4.4][i] }))

export const revenueByUnit = [
  { name: 'Water treatment', value: 42 },
  { name: 'Environmental tech', value: 27 },
  { name: 'Industrial solutions', value: 19 },
  { name: 'Digital automation', value: 12 }
]

export const rfmData = [
  { segment: 'Champions', customers: 54, share: 31 },
  { segment: 'Loyal', customers: 88, share: 29 },
  { segment: 'Potential', customers: 64, share: 18 },
  { segment: 'At risk', customers: 52, share: 14 },
  { segment: 'Lost', customers: 28, share: 8 }
]

export const topCustomers = [
  ['AquaNord Industria', 'R$ 5,2M', '11,4%', 'Low'],
  ['BioEixo Saneamento', 'R$ 4,8M', '10,5%', 'Medium'],
  ['VerdeMax Papel', 'R$ 3,9M', '8,6%', 'Low'],
  ['Mineral Cromo SA', 'R$ 3,5M', '7,7%', 'High'],
  ['Alpha Alimentos', 'R$ 2,7M', '6,1%', 'Medium']
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
  ['Nova planta de blending', 'Capex / Operações', '76%', 'On track'],
  ['CRM comercial 2.0', 'Clientes', '61%', 'Attention'],
  ['Programa GreenLab', 'Inovação', '84%', 'On track'],
  ['Academia técnica operacional', 'People', '69%', 'On track']
]
