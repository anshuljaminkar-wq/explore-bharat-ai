import { NavLink, Outlet } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/explore', 'Explore'],
  ['/planner', 'Plan a trip'],
  ['/budget', 'Budget'],
] as const

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only p-2"
      >
        Skip to content
      </a>

      <header className="bg-peacock text-white">
        <nav
          aria-label="Main"
          className="max-w-6xl mx-auto w-full px-4 py-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <NavLink
              to="/"
              className="font-display font-extrabold text-xl"
            >
              JourneyGenie
            </NavLink>

            <ul className="flex flex-wrap gap-4 text-sm">
              {links.map(([to, label]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `inline-block py-2 border-b-2 ${
                        isActive
                          ? 'border-[#e5ad3f] text-white'
                          : 'border-transparent text-white/80 hover:text-white'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main
        id="main"
        className="flex-1 max-w-6xl w-full mx-auto px-4 py-6"
      >
        <Outlet />
      </main>

      <footer className="text-center text-xs py-4 opacity-70">
        JourneyGenie · Your Journey. Your Vibe.
      </footer>
    </div>
  )
}
