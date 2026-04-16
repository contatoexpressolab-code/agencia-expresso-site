import { Link } from 'react-router-dom'

export default function Ferramentas() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '80vh', padding: 'clamp(3rem,6vw,5rem) 1.5rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Gratuito para donos de restaurante</span>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 0.95 }}>Ferramentas Gratuitas</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', fontWeight: 300 }}>Para donos de restaurante que tomam decisão com dado real.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { num: '01', title: 'Calculadora de CMV', desc: 'Calcule o Custo de Mercadoria Vendida por item, a taxa da plataforma e o preço ideal para iFood, 99Food ou balcão.', to: '/ferramentas/calculadora-cmv' },
            { num: '02', title: 'Simulador de Combo', desc: 'Monte combos estratégicos e descubra quanto você pode ganhar a mais por mês sem precisar de novos clientes.', to: '/ferramentas/simulador-combo' },
          ].map(({ num, title, desc, to }) => (
            <div key={num} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>{num}</span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{title}</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>{desc}</p>
              <Link to={to} style={{ display: 'inline-block', background: 'var(--text)', color: 'var(--text-inverse)', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.75rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Usar ferramenta →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}