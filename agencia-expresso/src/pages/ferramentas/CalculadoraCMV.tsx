import { useState } from 'react'
import { calculateCMV, Ingredient, CMVResult } from '../../lib/cmv-calculator'
import { PLATFORMS, Platform } from '../../lib/constants'

const emptyIngredient = (): Ingredient => ({ name: '', cost: 0, quantity: 1, unit: 'un' })

export default function CalculadoraCMV() {
  const [platform, setPlatform] = useState<Platform>('iFood')
  const [ingredients, setIngredients] = useState<Ingredient[]>([emptyIngredient()])
  const [packaging, setPackaging] = useState(0)
  const [labor, setLabor] = useState(0)
  const [result, setResult] = useState<CMVResult | null>(null)

  const updateIngredient = (i: number, field: keyof Ingredient, value: string | number) => {
    setIngredients(prev => prev.map((ing, idx) => idx === i ? { ...ing, [field]: value } : ing))
  }

  const calc = () => setResult(calculateCMV({ ingredients, packaging, labor, platform }))

  const fmt = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const fmtP = (n: number) => n.toFixed(1) + '%'

  const inputStyle = { background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.625rem 0.75rem', color: 'var(--text)', fontSize: '0.875rem', width: '100%', outline: 'none' }
  const labelStyle = { fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', display: 'block', marginBottom: '0.375rem' }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '80vh', padding: 'clamp(3rem,6vw,5rem) 1.5rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Ferramenta gratuita</span>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Calculadora de CMV</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 300 }}>Calcule o custo real do seu produto e o preço ideal por plataforma.</p>

        {/* Plataforma */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={labelStyle}>Plataforma de venda</span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {PLATFORMS.map(p => (
              <button key={p} onClick={() => setPlatform(p)} style={{
                padding: '0.5rem 1.25rem', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
                border: '1px solid', transition: 'all 0.15s',
                borderColor: platform === p ? 'var(--text)' : 'var(--border)',
                background: platform === p ? 'var(--text)' : 'transparent',
                color: platform === p ? 'var(--text-inverse)' : 'var(--text-muted)'
              }}>{p}</button>
            ))}
          </div>
        </div>

        {/* Ingredientes */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={labelStyle}>Ingredientes</span>
          {ingredients.map((ing, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'end' }}>
              <div><label style={labelStyle}>Nome</label><input style={inputStyle} value={ing.name} onChange={e => updateIngredient(i, 'name', e.target.value)} placeholder="Ex: Pão brioche" /></div>
              <div><label style={labelStyle}>Custo R$</label><input style={inputStyle} type="number" min={0} step={0.01} value={ing.cost} onChange={e => updateIngredient(i, 'cost', parseFloat(e.target.value) || 0)} /></div>
              <div><label style={labelStyle}>Qtd</label><input style={inputStyle} type="number" min={0} step={0.1} value={ing.quantity} onChange={e => updateIngredient(i, 'quantity', parseFloat(e.target.value) || 0)} /></div>
              <div><label style={labelStyle}>Unidade</label><input style={inputStyle} value={ing.unit} onChange={e => updateIngredient(i, 'unit', e.target.value)} placeholder="un/g/ml" /></div>
              <button onClick={() => setIngredients(prev => prev.filter((_, idx) => idx !== i))} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '6px', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.625rem 0.5rem', marginTop: '1.2rem' }}>✕</button>
            </div>
          ))}
          <button onClick={() => setIngredients(prev => [...prev, emptyIngredient()])} style={{ marginTop: '0.5rem', background: 'none', border: '1px dashed var(--border)', borderRadius: '6px', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%' }}>+ Add ingrediente</button>
        </div>

        {/* Embalagem e mão de obra */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div><label style={labelStyle}>Embalagem (R$)</label><input style={inputStyle} type="number" min={0} step={0.01} value={packaging} onChange={e => setPackaging(parseFloat(e.target.value) || 0)} /></div>
          <div><label style={labelStyle}>Mão de obra por un. (R$)</label><input style={inputStyle} type="number" min={0} step={0.01} value={labor} onChange={e => setLabor(parseFloat(e.target.value) || 0)} /></div>
        </div>

        <button onClick={calc} style={{ width: '100%', background: 'var(--text)', color: 'var(--text-inverse)', padding: '1rem', borderRadius: '6px', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', border: 'none', marginBottom: '2rem' }}>
          Calcular CMV
        </button>

        {result && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>Resultado</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                ['Custo Total', fmt(result.totalCost)],
                ['CMV%', fmtP(result.cmvPercent)],
                ['Preço Mínimo', fmt(result.minPrice)],
                ['Preço Recomendado', fmt(result.recommendedPrice)],
              ].map(([label, val]) => (
                <div key={label} style={{ background: 'var(--surface-2)', borderRadius: '8px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{label}</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.75rem', fontWeight: 900 }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1rem', borderRadius: '8px', background: result.isHealthy ? 'rgba(37,211,102,0.1)' : 'rgba(255,80,80,0.1)', border: `1px solid ${result.isHealthy ? 'rgba(37,211,102,0.3)' : 'rgba(255,80,80,0.3)'}`, marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: result.isHealthy ? '#25D366' : '#ff5050' }}>
                {result.isHealthy ? '✓ Margem saudável para operar com lucro' : '⚠ Margem abaixo de 30%. Risco de operar no prejuízo.'}
              </p>
            </div>
            <div style={{ borderTop: '1px solid var(--divider)', paddingTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.875rem' }}>Quer uma análise completa do seu cardápio?</p>
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