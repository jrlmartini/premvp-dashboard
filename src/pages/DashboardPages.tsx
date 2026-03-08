import { AlertTriangle, ArrowUpRight, Banknote, BrainCircuit, Building2, Gauge, Users } from 'lucide-react'
import { CashAreaChart, RevenueBarChart, SalesLineChart } from '../components/charts'
import { Card, DataTable, KpiCard, PageHeader } from '../components/ui'
import { alerts, cashTrend, highlights, kpiHome, processIssues, revenueByUnit, rfmData, salesTrend, strategicProjects, topCustomers } from '../data/mockData'

const rfmRows = rfmData.map((x) => [x.segment, `${x.customers}`, `${x.share}%`])

export const HomePage = () => (
  <div>
    <PageHeader title="Cockpit executivo" subtitle="Visão integrada do desempenho estratégico da Conatus Ambiental" />
    <section className="grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-6">
      {kpiHome.map((kpi) => <KpiCard key={kpi.label} {...kpi} />)}
    </section>

    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Vendas mensais vs previsão"><SalesLineChart data={salesTrend} /></Card>
      <Card title="Entradas vs saídas de caixa"><CashAreaChart data={cashTrend} /></Card>
    </section>

    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      <Card title="Receita por unidade de negócio"><RevenueBarChart data={revenueByUnit} /></Card>
      <Card title="Resumo RFM"><DataTable headers={['Segmento', 'Clientes', 'Participação da receita']} rows={rfmRows} /></Card>
      <Card title="Principais clientes por receita"><DataTable headers={['Cliente', 'Receita', 'Participação', 'Risco']} rows={topCustomers} /></Card>
    </section>

    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Alertas executivos" action={<AlertTriangle className="text-st-warning" size={18} />}>
        <ul className="space-y-3 text-base text-txt-secondary">{alerts.map((i) => <li className="flex gap-2" key={i}><span className="mt-2 h-1.5 w-1.5 rounded-full bg-st-warning" />{i}</li>)}</ul>
      </Card>
      <Card title="Destaques estratégicos" action={<ArrowUpRight className="text-st-success" size={18} />}>
        <ul className="space-y-3 text-base text-txt-secondary">{highlights.map((i) => <li className="flex gap-2" key={i}><span className="mt-2 h-1.5 w-1.5 rounded-full bg-st-success" />{i}</li>)}</ul>
      </Card>
    </section>
  </div>
)

export const FinancialPage = () => (
  <div>
    <PageHeader title="Perspectiva financeira" subtitle="Receita, margem, caixa e alavancas de rentabilidade" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Receita MTD" value={11800000} type="currency" delta="+8,2% vs MTD anterior" status="success" />
      <KpiCard label="Receita acumulada no ano" value={104500000} type="currency" delta="93,7% da meta anual" status="warning" />
      <KpiCard label="Margem bruta" value={0.312} type="percent" delta="-0,8 pp abaixo da meta" status="warning" />
      <KpiCard label="Margem EBITDA" value={0.168} type="percent" delta="+1,4 pp no ano" status="success" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Tendência de receita vs meta"><SalesLineChart data={salesTrend} /></Card>
      <Card title="Composição de caixa"><CashAreaChart data={cashTrend} /></Card>
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Composição de despesas por unidade"><RevenueBarChart data={revenueByUnit} /></Card>
      <Card title="Pontos financeiros de atenção"><DataTable headers={['Tema', 'Atual', 'Meta', 'Ação']} rows={[['DSO', '58 d', '50 d', 'Revisar política crédito'], ['Inadimplência', '2,9%', '1,8%', 'Plano cobrança ativa'], ['Capex execução', '63%', '70%', 'Acelerar homologações'], ['Margem serviços', '24,4%', '27,0%', 'Renegociar contratos']]}/></Card>
    </section>
  </div>
)

export const CustomersPage = () => (
  <div>
    <PageHeader title="Perspectiva de clientes" subtitle="Saúde da carteira, crescimento e qualidade relacional" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Clientes ativos" value={286} type="number" delta="+18 no ano" status="success" />
      <KpiCard label="Novos clientes" value={34} type="number" delta="+6 no trimestre" status="success" />
      <KpiCard label="Retenção" value={0.922} type="percent" delta="-1,1 pp vs meta" status="warning" />
      <KpiCard label="Concentração top 10" value={0.467} type="percent" delta="-0,7 pp (melhor distribuição)" status="success" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      <Card title="Mini dashboard RFM"><DataTable headers={['Segmento', 'Clientes', 'Participação da receita']} rows={rfmRows} /></Card>
      <Card title="Receita por segmento"><RevenueBarChart data={revenueByUnit} /></Card>
      <Card title="Principais contas"><DataTable headers={['Cliente', 'Receita', 'Participação', 'Risco']} rows={topCustomers} /></Card>
    </section>
  </div>
)

export const ProcessesPage = () => (
  <div>
    <PageHeader title="Perspectiva de processos internos" subtitle="Eficiência operacional, SLA e estabilidade de execução" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Entregas no prazo" value={0.946} type="percent" delta="-0,6 pp no mês" status="warning" />
      <KpiCard label="Conformidade de SLA" value={0.938} type="percent" delta="-1,2 pp vs meta" status="warning" />
      <KpiCard label="Tempo de ciclo" value={42} type="number" delta="-3 dias vs Q1" status="success" />
      <KpiCard label="Issues críticos abertos" value={7} type="number" delta="+2 em 15 dias" status="danger" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Tendência de throughput operacional"><SalesLineChart data={salesTrend} /></Card>
      <Card title="Gargalos operacionais abertos"><DataTable headers={['Ocorrência', 'Descrição', 'Região', 'Prioridade', 'Idade']} rows={processIssues} /></Card>
    </section>
  </div>
)

export const LearningPage = () => (
  <div>
    <PageHeader title="Perspectiva de aprendizado e crescimento" subtitle="Capacitação, inovação e execução estratégica" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Horas de treinamento" value={1840} type="number" delta="+22% no ano" status="success" />
      <KpiCard label="Conclusão de treinamentos" value={0.781} type="percent" delta="+9,4 pp em 90 dias" status="success" />
      <KpiCard label="Iniciativas ativas de P&D" value={12} type="number" delta="3 projetos em fase piloto" status="success" />
      <KpiCard label="Progresso de OKRs" value={0.684} type="percent" delta="2 objetivos em atenção" status="warning" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Evolução de capacidades"><CashAreaChart data={cashTrend} /></Card>
      <Card title="Status das iniciativas estratégicas"><DataTable headers={['Iniciativa', 'Frente', 'Progresso', 'Status']} rows={strategicProjects} /></Card>
    </section>
  </div>
)

export const navItems = [
  { key: 'home', label: 'Início', icon: Building2 },
  { key: 'financial', label: 'Financeiro', icon: Banknote },
  { key: 'customers', label: 'Clientes', icon: Users },
  { key: 'processes', label: 'Processos', icon: Gauge },
  { key: 'learning', label: 'Aprendizado & Crescimento', icon: BrainCircuit }
] as const
