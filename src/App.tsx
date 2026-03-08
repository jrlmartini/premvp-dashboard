import { Settings } from 'lucide-react'
import { useMemo, useState } from 'react'
import { FinancialPage, HomePage, CustomersPage, LearningPage, navItems, ProcessesPage } from './pages/DashboardPages'
import conatusLogo from '../CONATUS.png'

const pageMap = {
  home: HomePage,
  financial: FinancialPage,
  customers: CustomersPage,
  processes: ProcessesPage,
  learning: LearningPage
}

export const App = () => {
  const [active, setActive] = useState<keyof typeof pageMap>('home')
  const Current = useMemo(() => pageMap[active], [active])

  return (
    <div className="min-h-screen bg-bg-main text-txt-main">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 xl:grid-cols-[260px_1fr]">
        <aside className="border-r border-str-default bg-bg-card p-4 xl:min-h-screen">
          <img src={conatusLogo} alt="Conatus Ambiental" className="mb-8 h-8 w-auto" />
          <nav className="space-y-2">
            {navItems.map((item) => {
              const activeItem = active === item.key
              return (
                <button key={item.key} onClick={() => setActive(item.key)} className={`flex h-10 w-full items-center gap-3 rounded-sm border px-3 text-left text-base transition ${activeItem ? 'border-str-hover text-txt-main' : 'border-str-default text-txt-secondary hover:border-[1.5px] hover:border-str-hover'}`}>
                  <item.icon size={16} />
                  {item.label}
                </button>
              )
            })}
          </nav>
          <div className="mt-8 border-t border-str-default pt-4">
            <button className="flex h-10 w-full items-center gap-3 rounded-sm border border-str-default px-3 text-left text-base text-txt-secondary hover:border-[1.5px] hover:border-str-hover">
              <Settings size={16} /> Settings
            </button>
          </div>
        </aside>

        <main className="p-4 md:p-6 xl:p-8">
          <Current />
        </main>
      </div>
    </div>
  )
}
