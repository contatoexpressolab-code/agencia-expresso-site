import { useParams } from 'react-router-dom'

export default function BlogPost() {
  const { slug } = useParams()
  return (
    <div style={{ background: 'var(--bg)', minHeight: '80vh', padding: 'clamp(3rem,6vw,5rem) 1.5rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <p style={{ color: 'var(--text-muted)' }}>Artigo: {slug} — em breve.</p>
      </div>
    </div>
  )
}