import { Outlet, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Layout() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('light')
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100dvh' }}>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 200,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 1.5rem',
        background: 'color-mix(in srgb, var(--bg) 92%, transparent)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--divider)'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="3" fill="var(--text)"/>
            <path d="M6 7h13v3H9.5v2.5h8V16h-8v2.5H19v3H6V7Z" fill="var(--text-inverse)"/>
          </svg>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.06em', color: 'var(--text)', textTransform: 'uppercase' }}>
            AGÊNCIA<span style={{ opacity: 0.4 }}>EXPRESSO</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="nav-links">
            <NavLink to="/ferramentas" style={({ isActive }) => ({ color: isActive ? 'var(--text)' : 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 })}>Ferramentas</NavLink>
            <NavLink to="/blog" style={({ isActive }) => ({ color: isActive ? 'var(--text)' : 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 })}>Blog</NavLink>
            <a href="/#servicos" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Serviços</a>
            <a href="https://wa.me/5585987772526" target="_blank" rel="noopener" style={{
              background: 'var(--text)', color: 'var(--text-inverse)',
              padding: '0.375rem 1rem', borderRadius: '6px',
              fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.05em',
              textTransform: 'uppercase', textDecoration: 'none'
            }}>Quero meu diagnóstico</a>
          </div>
          <button onClick={toggleTheme} style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex' }}>
            {dark
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>
        </div>
      </nav>

      <main style={{ paddingTop: '72px' }}>
        <Outlet />
      </main>

      <footer style={{
        background: 'var(--bg)', borderTop: '1px solid var(--divider)',
        padding: '2rem 1.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem'
      }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)' }}>
          AGÊNCIA<span style={{ opacity: 0.35 }}>EXPRESSO</span>
        </span>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)', letterSpacing: '0.04em' }}>Marketing exclusivo para restaurantes · Desde 2014 · Fortaleza/CE</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>@agenciaexpresso</p>
      </footer>
    </div>
  )
}