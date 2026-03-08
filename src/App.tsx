import { ChevronLeft, ChevronRight, Maximize, Minimize, Settings } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
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
  const [collapsed, setCollapsed] = useState(false)
  const [isQuiosque, setIsQuiosque] = useState(false)
  const Current = useMemo(() => pageMap[active], [active])

  const toggleQuiosque = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      setIsQuiosque(true)
      return
    }

    await document.exitFullscreen()
    setIsQuiosque(false)
  }

  useEffect(() => {
    const onFullscreenChange = () => setIsQuiosque(Boolean(document.fullscreenElement))
    const onShortcut = (event: KeyboardEvent) => {
      const withModifier = event.metaKey || event.ctrlKey
      if (withModifier && event.shiftKey && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        void toggleQuiosque()
      }
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    window.addEventListener('keydown', onShortcut)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      window.removeEventListener('keydown', onShortcut)
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg-main text-txt-main">
      <div className={`mx-auto grid max-w-[1600px] grid-cols-1 ${isQuiosque ? 'xl:grid-cols-1' : collapsed ? 'xl:grid-cols-[88px_1fr]' : 'xl:grid-cols-[260px_1fr]'}`}>
        {!isQuiosque && (
          <aside className="border-r border-str-default bg-bg-card p-4 xl:min-h-screen">
            <div className="mb-8 flex items-center justify-between">
              <img src={conatusLogo} alt="Conatus Ambiental" className={`w-auto ${collapsed ? 'h-7' : 'h-8'}`} />
              <button onClick={() => setCollapsed((prev) => !prev)} className="hidden h-10 w-10 items-center justify-center rounded-sm border border-str-default text-txt-secondary transition hover:border-[1.5px] hover:border-str-hover hover:text-txt-main xl:flex" aria-label="Recolher menu lateral">
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const activeItem = active === item.key
                return (
                  <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={`flex h-10 w-full items-center rounded-sm border text-base transition ${collapsed ? 'justify-center px-0' : 'gap-3 px-3 text-left'} ${activeItem ? 'border-str-hover text-txt-main' : 'border-str-default text-txt-secondary hover:border-[1.5px] hover:border-str-hover'}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <item.icon size={16} />
                    {!collapsed && item.label}
                  </button>
                )
              })}
            </nav>

            <div className="mt-8 border-t border-str-default pt-4">
              <button className={`flex h-10 w-full items-center rounded-sm border border-str-default text-base text-txt-secondary transition hover:border-[1.5px] hover:border-str-hover hover:text-txt-main ${collapsed ? 'justify-center px-0' : 'gap-3 px-3 text-left'}`} title={collapsed ? 'Configurações' : undefined}>
                <Settings size={16} /> {!collapsed && 'Configurações'}
              </button>
            </div>
          </aside>
        )}

        <main className="p-4 md:p-6 xl:p-8">
          <div className="mb-4 flex items-center justify-end gap-2">
            <button onClick={() => setCollapsed((prev) => !prev)} className="flex h-10 items-center gap-2 rounded-sm border border-str-default bg-bg-card px-3 text-txt-main transition hover:border-[1.5px] hover:border-str-hover xl:hidden">
              {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />} Menu
            </button>
            <button onClick={() => void toggleQuiosque()} className="flex h-10 items-center gap-2 rounded-sm border border-str-default bg-bg-card px-3 text-txt-main transition hover:border-[1.5px] hover:border-str-hover" title="Atalho: Ctrl/Cmd + Shift + K">
              {isQuiosque ? <Minimize size={16} /> : <Maximize size={16} />}
              {isQuiosque ? 'Sair do modo quiosque' : 'Modo quiosque'}
            </button>
          </div>

          {isQuiosque && (
            <div className="mb-4 rounded-md border border-str-hover bg-bg-card p-4 text-sm text-txt-secondary">
              Modo quiosque ativo. Pressione <span className="text-txt-main">Esc</span> para sair rapidamente.
            </div>
          )}

          <Current />
        </main>
      </div>
    </div>
  )
}
