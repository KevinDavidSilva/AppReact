'use client'

import { useState } from 'react'
import { Calendar, ChevronRight, GraduationCap, Image, LayoutDashboard, LineChart, WalletCards, Coins, Menu } from 'lucide-react'

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  const dashboards = [
    { name: 'Project', icon: LayoutDashboard },
    { name: 'Analytics', icon: LineChart },
    { name: 'Finance', icon: WalletCards },
    { name: 'Crypto', icon: Coins }
  ]

  const applications = [
    { name: 'AI Image Generator', icon: Image, badge: 'NEW' },
    { name: 'Academy', icon: GraduationCap },
    { name: 'Calendar', icon: Calendar, subtitle: '3 upcoming events' }
  ]

  return (
    <aside className={`flex flex-col bg-zinc-950 text-white transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-500">
            <div className="h-4 w-4 rotate-45 border-2 border-white" />
          </div>
          {isExpanded && (
            <div className="flex items-center gap-1">
              <span className="font-bold">FUSE</span>
              <span className="text-blue-400">REACT</span>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 rounded-md hover:bg-white/10"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 p-2">
        {/* Dashboards */}
        <div>
          {isExpanded && (
            <div className="px-4 pb-2">
              <h2 className="text-xs font-semibold uppercase text-zinc-500">Dashboards</h2>
              <p className="text-xs text-zinc-600">Unique dashboard designs</p>
            </div>
          )}
          <ul className="space-y-1">
            {dashboards.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center gap-4 rounded-lg px-4 py-2 text-zinc-400 hover:bg-white/5"
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {isExpanded && <span>{item.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div>
          {isExpanded && (
            <div className="px-4 pb-2">
              <h2 className="text-xs font-semibold uppercase text-zinc-500">Applications</h2>
              <p className="text-xs text-zinc-600">Custom made application designs</p>
            </div>
          )}
          <ul className="space-y-1">
            {applications.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center gap-4 rounded-lg px-4 py-2 text-zinc-400 hover:bg-white/5"
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {isExpanded && (
                    <div className="flex flex-1 items-center justify-between">
                      <div className="flex flex-col">
                        <span>{item.name}</span>
                        {item.subtitle && (
                          <span className="text-xs text-zinc-600">{item.subtitle}</span>
                        )}
                      </div>
                      {item.badge && (
                        <span className="rounded bg-blue-500 px-1.5 py-0.5 text-xs">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer */}
      {isExpanded && (
        <div className="p-4">
          <button className="flex w-full items-center gap-4 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-400 hover:bg-white/5">
            <ChevronRight className="h-4 w-4" />
            <span>Need assistance to get started?</span>
          </button>
        </div>
      )}
    </aside>
  )
}

