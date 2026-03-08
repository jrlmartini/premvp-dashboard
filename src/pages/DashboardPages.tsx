import { AlertTriangle, ArrowUpRight, Banknote, BrainCircuit, Building2, Gauge, Users } from 'lucide-react'
import { CashAreaChart, RevenueBarChart, SalesLineChart } from '../components/charts'
import { Card, DataTable, KpiCard, PageHeader } from '../components/ui'
import { alerts, cashTrend, highlights, kpiHome, processIssues, revenueByUnit, rfmData, salesTrend, strategicProjects, topCustomers } from '../data/mockData'

const rfmRows = rfmData.map((x) => [x.segment, `${x.customers}`, `${x.share}%`])

export const HomePage = () => (
  <div>
    <PageHeader title="Executive cockpit" subtitle="Visão integrada de desempenho estratégico da Conatus Ambiental" />
    <section className="grid grid-cols-1 gap-4 xl:grid-cols-3 2xl:grid-cols-6">
      {kpiHome.map((kpi) => <KpiCard key={kpi.label} {...kpi} />)}
    </section>

    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Monthly sales vs forecast"><SalesLineChart data={salesTrend} /></Card>
      <Card title="Cash inflows vs outflows"><CashAreaChart data={cashTrend} /></Card>
    </section>

    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      <Card title="Revenue by business unit"><RevenueBarChart data={revenueByUnit} /></Card>
      <Card title="RFM summary"><DataTable headers={['Segment', 'Customers', 'Revenue share']} rows={rfmRows} /></Card>
      <Card title="Top customers by revenue"><DataTable headers={['Customer', 'Revenue', 'Share', 'Risk']} rows={topCustomers} /></Card>
    </section>

    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Executive alerts" action={<AlertTriangle className="text-st-warning" size={18} />}>
        <ul className="space-y-3 text-base text-txt-secondary">{alerts.map((i) => <li className="flex gap-2" key={i}><span className="mt-2 h-1.5 w-1.5 rounded-full bg-st-warning" />{i}</li>)}</ul>
      </Card>
      <Card title="Strategic highlights" action={<ArrowUpRight className="text-st-success" size={18} />}>
        <ul className="space-y-3 text-base text-txt-secondary">{highlights.map((i) => <li className="flex gap-2" key={i}><span className="mt-2 h-1.5 w-1.5 rounded-full bg-st-success" />{i}</li>)}</ul>
      </Card>
    </section>
  </div>
)

export const FinancialPage = () => (
  <div>
    <PageHeader title="Financial perspective" subtitle="Receita, margem, caixa e alavancas de rentabilidade" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Revenue MTD" value={11800000} type="currency" delta="+8,2% vs MTD anterior" status="success" />
      <KpiCard label="Revenue YTD" value={104500000} type="currency" delta="93,7% da meta anual" status="warning" />
      <KpiCard label="Gross margin" value={0.312} type="percent" delta="-0,8 pp abaixo da meta" status="warning" />
      <KpiCard label="EBITDA margin" value={0.168} type="percent" delta="+1,4 pp YTD" status="success" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Revenue and target trend"><SalesLineChart data={salesTrend} /></Card>
      <Card title="Cash composition"><CashAreaChart data={cashTrend} /></Card>
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Expense composition by unit"><RevenueBarChart data={revenueByUnit} /></Card>
      <Card title="Financial attention points"><DataTable headers={['Topic', 'Current', 'Target', 'Action']} rows={[['DSO', '58 d', '50 d', 'Revisar política crédito'], ['Inadimplência', '2,9%', '1,8%', 'Plano cobrança ativa'], ['Capex execução', '63%', '70%', 'Acelerar homologações'], ['Margem serviços', '24,4%', '27,0%', 'Renegociar contratos']]}/></Card>
    </section>
  </div>
)

export const CustomersPage = () => (
  <div>
    <PageHeader title="Customers perspective" subtitle="Saúde da carteira, crescimento e qualidade relacional" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Active customers" value={286} type="number" delta="+18 YTD" status="success" />
      <KpiCard label="New customers" value={34} type="number" delta="+6 no trimestre" status="success" />
      <KpiCard label="Retention" value={0.922} type="percent" delta="-1,1 pp vs meta" status="warning" />
      <KpiCard label="Top 10 concentration" value={0.467} type="percent" delta="-0,7 pp (melhor distribuição)" status="success" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      <Card title="RFM mini dashboard"><DataTable headers={['Segment', 'Customers', 'Revenue share']} rows={rfmRows} /></Card>
      <Card title="Revenue by segment"><RevenueBarChart data={revenueByUnit} /></Card>
      <Card title="Top accounts"><DataTable headers={['Customer', 'Revenue', 'Share', 'Risk']} rows={topCustomers} /></Card>
    </section>
  </div>
)

export const ProcessesPage = () => (
  <div>
    <PageHeader title="Internal processes perspective" subtitle="Eficiência operacional, SLA e estabilidade de execução" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="On-time delivery" value={0.946} type="percent" delta="-0,6 pp no mês" status="warning" />
      <KpiCard label="SLA compliance" value={0.938} type="percent" delta="-1,2 pp vs meta" status="warning" />
      <KpiCard label="Cycle time" value={42} type="number" delta="-3 dias vs Q1" status="success" />
      <KpiCard label="Open critical issues" value={7} type="number" delta="+2 em 15 dias" status="danger" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Process throughput trend"><SalesLineChart data={salesTrend} /></Card>
      <Card title="Open operational bottlenecks"><DataTable headers={['Issue', 'Description', 'Region', 'Priority', 'Age']} rows={processIssues} /></Card>
    </section>
  </div>
)

export const LearningPage = () => (
  <div>
    <PageHeader title="Learning & growth perspective" subtitle="Capacitação, inovação e execução estratégica" />
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Training hours" value={1840} type="number" delta="+22% YTD" status="success" />
      <KpiCard label="Training completion" value={0.781} type="percent" delta="+9,4 pp em 90 dias" status="success" />
      <KpiCard label="Active R&D initiatives" value={12} type="number" delta="3 projetos em fase piloto" status="success" />
      <KpiCard label="OKR progress" value={0.684} type="percent" delta="2 objetivos em atenção" status="warning" />
    </section>
    <section className="mt-6 grid gap-4 xl:grid-cols-2">
      <Card title="Capability evolution"><CashAreaChart data={cashTrend} /></Card>
      <Card title="Strategic initiatives status"><DataTable headers={['Initiative', 'Front', 'Progress', 'Status']} rows={strategicProjects} /></Card>
    </section>
  </div>
)

export const navItems = [
  { key: 'home', label: 'Home', icon: Building2 },
  { key: 'financial', label: 'Financial', icon: Banknote },
  { key: 'customers', label: 'Customers', icon: Users },
  { key: 'processes', label: 'Processes', icon: Gauge },
  { key: 'learning', label: 'Learning & Growth', icon: BrainCircuit }
] as const
