export default function Blog() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '80vh', padding: 'clamp(3rem,6vw,5rem) 1.5rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Conteúdo aprofundado</span>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>Blog</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 300 }}>Em breve — conteúdo aprofundado para donos de restaurante.</p>
      </div>
    </div>
  )
}