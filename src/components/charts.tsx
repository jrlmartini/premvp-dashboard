import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const axis = { stroke: '#c1cdd9', fontSize: 12 }

export const SalesLineChart = ({ data }: { data: { month: string; revenue: number; target: number }[] }) => (
  <ResponsiveContainer width="100%" height={260}>
    <LineChart data={data}>
      <CartesianGrid stroke="#214059" strokeOpacity={0.45} />
      <XAxis dataKey="month" tick={axis} />
      <YAxis tick={axis} />
      <Tooltip contentStyle={{ background: '#071724', border: '0.5px solid #214059', color: '#f2f2f2' }} />
      <Line type="monotone" dataKey="revenue" stroke="#275fc1" strokeWidth={2.5} dot={false} />
      <Line type="monotone" dataKey="target" stroke="#19c2b8" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
)

export const CashAreaChart = ({ data }: { data: { month: string; inflow: number; outflow: number }[] }) => (
  <ResponsiveContainer width="100%" height={260}>
    <AreaChart data={data}>
      <CartesianGrid stroke="#214059" strokeOpacity={0.45} />
      <XAxis dataKey="month" tick={axis} />
      <YAxis tick={axis} />
      <Tooltip contentStyle={{ background: '#071724', border: '0.5px solid #214059', color: '#f2f2f2' }} />
      <Area type="monotone" dataKey="inflow" stackId="1" stroke="#22A87e" fill="#22A87e" fillOpacity={0.25} />
      <Area type="monotone" dataKey="outflow" stackId="1" stroke="#e45757" fill="#e45757" fillOpacity={0.25} />
    </AreaChart>
  </ResponsiveContainer>
)

export const RevenueBarChart = ({ data }: { data: { name: string; value: number }[] }) => (
  <ResponsiveContainer width="100%" height={260}>
    <BarChart data={data} layout="vertical">
      <CartesianGrid stroke="#214059" strokeOpacity={0.45} />
      <XAxis type="number" tick={axis} />
      <YAxis type="category" dataKey="name" tick={axis} width={140} />
      <Tooltip contentStyle={{ background: '#071724', border: '0.5px solid #214059', color: '#f2f2f2' }} />
      <Bar dataKey="value" fill="#2aa9e0" radius={[8, 8, 8, 8]} />
    </BarChart>
  </ResponsiveContainer>
)
