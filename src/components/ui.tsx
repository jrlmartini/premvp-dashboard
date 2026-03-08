import { ReactNode } from 'react'
import { formatCompact, formatCurrencyCompact, formatPercent } from '../lib/utils'

type CardProps = { title: string; children: ReactNode; action?: ReactNode; className?: string }

export const Card = ({ title, children, action, className = '' }: CardProps) => (
  <section className={`rounded-md border border-str-default bg-bg-card p-4 transition hover:border-[1.5px] hover:border-str-hover ${className}`}>
    <header className="mb-3 flex items-start justify-between gap-2">
      <h3 className="line-clamp-2 text-[20px] font-semibold text-txt-main">{title}</h3>
      {action}
    </header>
    {children}
  </section>
)

export const KpiCard = ({ label, value, type, delta, status }: { label: string; value: number; type: 'currency'|'percent'|'number'; delta: string; status: 'success'|'warning'|'danger' }) => {
  const parsed = type === 'currency' ? formatCurrencyCompact(value) : type === 'percent' ? formatPercent(value * 100) : formatCompact(value)
  const dot = status === 'success' ? 'bg-st-success' : status === 'warning' ? 'bg-st-warning' : 'bg-st-danger'
  return (
    <section className="rounded-md border border-str-default bg-bg-card p-4 font-tabular-nums transition hover:border-[1.5px] hover:border-str-hover">
      <p className="text-sm text-txt-secondary">{label}</p>
      <p className="mt-2 text-[30px] font-bold leading-tight text-txt-main">{parsed}</p>
      <p className="mt-3 flex items-center gap-2 text-sm text-txt-secondary"><span className={`h-2 w-2 rounded-full ${dot}`} />{delta}</p>
    </section>
  )
}

export const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header className="mb-6 flex items-end justify-between gap-4">
    <div>
      <h1 className="text-[24px] font-semibold text-txt-main">{title}</h1>
      <p className="text-base text-txt-secondary">{subtitle}</p>
    </div>
    <div className="flex gap-2">
      <button className="h-10 rounded-sm border border-str-default bg-bg-card px-4 text-txt-main hover:border-[1.5px] hover:border-str-hover">YTD 2026</button>
      <button className="h-10 rounded-sm bg-bg-button px-4 text-txt-main">Export</button>
    </div>
  </header>
)

export const DataTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-auto">
    <table className="min-w-full text-left text-sm">
      <thead>
        <tr className="border-b border-str-default">
          {headers.map((h) => <th className="py-3 pr-4 font-normal text-txt-secondary" key={h}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={`${r[0]}-${i}`} className="border-b border-str-default/70 last:border-none hover:border-x hover:border-str-hover">
            {r.map((c, j) => <td className="py-3 pr-4 text-txt-main" key={`${c}-${j}`}>{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
