import { useState } from 'react'
import { simulateCombo, ComboItem, ComboResult } from '../../lib/combo-simulator'

const emptyItem = (): ComboItem => ({ name: '', price: 0, cost: 0 })

export default function SimuladorCombo() {
  const [items, setItems] = useState<ComboItem[]>([emptyItem(), emptyItem()])
  const [comboPrice, setComboPrice] = useState(0)
  const [monthlyOrders, setMonthlyOrders] = useState(300)
  const [adoptionRate, setAdoptionRate] = useState(0.3)
  const [result, setResult] = useState<ComboResult | null>(null)

  const updateItem = (i: number, field: keyof ComboItem, value: string | number) => {
    setItems(prev => prev.map((item, idx) => idx === i ? { ...item, [field]: value } : item))
  }

  const calc = () => setResult(simulateCombo({ items, comboPrice, monthlyOrders, comboAdoptionRate: adoptionRate }))
  const fmt = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const inputStyle = { background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.625rem 0.75rem', color: 'var(--text)', fontSize: '0.875rem', width: '100%', outline: 'none' }
  const labelStyle = { fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', display: 'block', marginBottom: '0.375rem' }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '80vh', padding: 'clamp(3rem,6vw,5rem) 1.5rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Ferramenta gratuita</span>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Simulador de Combo</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 300 }}>Descubra quanto você ganha a mais por mês sem precisar de novos clientes.</p>

        {/* Itens */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={labelStyle}>Itens do Combo</span>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'end' }}>
              <div><label style={labelStyle}>Item</label><input style={inputStyle} value={item.name} onChange={e => updateItem(i, 'name', e.target.value)} placeholder="Ex: Burger 200g" /></div>
              <div><label style={labelStyle}>Preço R$</label><input style={inputStyle} type="number" min={0} step={0.01} value={item.price} onChange={e => updateItem(i, 'price', parseFloat(e.target.value) || 0)} /></div>
              <div><label style={labelStyle}>Custo R$</label><input style={inputStyle} type="number" min={0} step={0.01} value={item.cost} onChange={e => updateItem(i, 'cost', parseFloat(e.target.value) || 0)} /></div>
              {items.length > 2 && <button onClick={() => setItems(prev => prev.filter((_, idx) => idx !== i))} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '6px', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.625rem 0.5rem', marginTop: '1.2rem' }}>✕</button>}
            </div>
          ))}
          {items.length < 6 && <button onClick={() => setItems(prev => [...prev, emptyItem()])} style={{ marginTop: '0.5rem', background: 'none', border: '1px dashed var(--border)', borderRadius: '6px', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%' }}>+ Add item</button>}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div><label style={labelStyle}>Preço do Combo (R$)</label><input style={inputStyle} type="number" min={0} step={0.01} value={comboPrice} onChange={e => setComboPrice(parseFloat(e.target.value) || 0)} /></div>
          <div><label style={labelStyle}>Pedidos por mês</label><input style={inputStyle} type="number" min={1} value={monthlyOrders} onChange={e => setMonthlyOrders(parseInt(e.target.value) || 0)} /></div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}>Taxa de adoção do combo: <strong style={{ color: 'var(--text)' }}>{Math.round(adoptionRate * 100)}% dos pedidos</strong></label>
          <input type="range" min={10} max={80} value={adoptionRate * 100} onChange={e => setAdoptionRate(parseInt(e.target.value) / 100)} style={{ width: '100%', accentColor: 'var(--text)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-faint)', marginTop: '0.25rem' }}><span>10%</span><span>80%</span></div>
        </div>

        <button onClick={calc} style={{ width: '100%', background: 'var(--text)', color: 'var(--text-inverse)', padding: '1rem', borderRadius: '6px', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', border: 'none', marginBottom: '2rem' }}>
          Simular Combo
        </button>

        {result && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '2rem', background: 'var(--surface-2)', borderRadius: '8px' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 900, color: 'var(--text)', lineHeight: 1 }}>
                + {fmt(result.extraRevenue)} / mês
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.875rem' }}>sem trazer um único cliente novo</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                ['Ticket antes', fmt(result.ticketBefore)],
                ['Ticket depois', fmt(result.ticketAfter)],
                ['Faturamento sem combo', fmt(result.revenueWithoutCombo)],
                ['Faturamento com combo', fmt(result.revenueWithCombo)],
                ['Ganho mensal', fmt(result.extraRevenue)],
                ['Ganho anual projetado', fmt(result.extraRevenueYear)],
              ].map(([label, val]) => (
                <div key={label} style={{ background: 'var(--surface-2)', borderRadius: '8px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{label}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.5rem', fontWeight: 900 }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--divider)', paddingTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.875rem' }}>Quer estruturar os combos do seu cardápio?</p>
              <a href="https://wa.me/5585987772526" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                Falar com a Agência Expresso
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}