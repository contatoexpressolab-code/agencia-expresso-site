export default function Home() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>

      {/* HERO */}
      <section style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', padding: 'clamp(4rem,8vw,6rem) 1.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--text-muted)' }}/>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Exclusivo para restaurantes · Desde 2014 · Fortaleza/CE</span>
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(3.5rem,10vw,8rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '2rem' }}>
            Seu restaurante<br/>fatura.<br/><span style={{ opacity: 0.3 }}>Pode faturar mais.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2.5rem', maxWidth: '500px', fontWeight: 300 }}>
            Antes de qualquer campanha ou post, a gente entra nos dados do seu negócio. O diagnóstico vem primeiro. Sempre.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="https://wa.me/5585987772526" target="_blank" rel="noopener" style={{ background: 'var(--text)', color: 'var(--text-inverse)', padding: '1rem 2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
              Quero saber quanto estou perdendo
            </a>
            <a href="#servicos" style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', padding: '1rem 2rem', borderRadius: '6px', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>
              Ver serviços →
            </a>
          </div>
          <div style={{ display: 'flex', gap: 0, borderTop: '1px solid var(--divider)', paddingTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['+10 anos', 'Só com restaurantes'], ['Dados', 'Base de toda decisão'], ['360°', 'Da operação à imagem']].map(([val, key], i) => (
              <div key={i} style={{ paddingRight: '2.5rem', paddingLeft: i > 0 ? '2.5rem' : 0, borderLeft: i > 0 ? '1px solid var(--divider)' : 'none' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, textTransform: 'uppercase' }}>{val}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.04em' }}>{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERGUNTA ERRADA */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', padding: 'clamp(4rem,8vw,6rem) 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.95 }}>
            A pergunta <span style={{ opacity: 0.3 }}>errada</span><br/>custa caro.
          </h2>
          <div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>
              90% dos donos de restaurante chegam até nós com a mesma pergunta: <strong style={{ color: 'var(--text)', fontWeight: 600 }}>"quantos posts por mês vocês entregam?"</strong>
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>
              Isso revela o que o mercado acostumou a vender: volume de conteúdo. Não resultado de negócio.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>
              A pergunta certa é outra: <strong style={{ color: 'var(--text)', fontWeight: 600 }}>"quanto o meu restaurante está deixando de faturar — e por quê?"</strong>
            </p>
            <span style={{ display: 'inline-block', border: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.375rem 0.75rem', borderRadius: '6px' }}>Desde 2014 fazendo diferente</span>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section id="diagnostico" style={{ padding: 'clamp(4rem,8vw,6rem) 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>O ponto de partida</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>O diagnóstico vem primeiro.<br/>Sempre.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.65, fontWeight: 300 }}>Nenhum trabalho começa sem entender, em números reais, o que está acontecendo no seu negócio.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--divider)', border: '1px solid var(--divider)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2.5rem' }}>
            {[['01','Ticket Médio Real','Calculamos o ticket médio por bairro, por período e por canal. Não o ticket que você acha que tem — o que os dados mostram.'],['02','CMV e Margem Real','Qual é o custo de mercadoria vendida de cada item? Qual é a margem real depois de embalagem, motoqueiro e plataforma?'],['03','Mapa de Perdas','Itens sem margem, pedidos perdidos fora do horário, combos inexistentes, upsell zero. Quantificamos cada ponto.'],['04','Concorrência e Mercado','Como você está posicionado em relação aos concorrentes no Maps, no iFood e nas redes sociais.']].map(([num,title,desc]) => (
              <div key={num} style={{ background: 'var(--surface)', padding: '2rem' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '4rem', fontWeight: 900, opacity: 0.07, display: 'block', lineHeight: 0.8, marginBottom: '1rem' }}>{num}</span>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, textTransform: 'uppercase', maxWidth: '500px' }}>
              O diagnóstico não é um serviço extra. <span style={{ opacity: 0.4 }}>É a única forma de começar.</span>
            </p>
            <a href="https://wa.me/5585987772526" target="_blank" rel="noopener" style={{ background: 'var(--text)', color: 'var(--text-inverse)', padding: '1rem 2rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Quero meu diagnóstico</a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={{ background: 'var(--surface)', padding: 'clamp(4rem,8vw,6rem) 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>O que fazemos</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>Quatro frentes.<br/>Um único foco: resultado.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { num: '01', badge: 'Principal', title: 'Organização do Delivery', desc: 'Mergulhamos na sua operação inteira. Delivery mal estruturado não é problema de marketing — é problema de gestão.', items: ['Cálculo de CMV por item e margem real', 'Dimensionamento de motoqueiros por raio', 'Integração iFood, Rappi, WhatsApp', 'Robô de atendimento ativo 24h'] },
              { num: '02', badge: 'Principal', title: 'Engenharia de Cardápio', desc: 'Um cardápio bem construído aumenta o ticket médio sem trazer um único cliente novo.', items: ['Análise de rentabilidade por produto', 'Estrutura de combos baseada em CMV', 'Precificação com ancoragem de valor', 'Posicionamento para maximizar upsell'] },
              { num: '03', badge: 'Principal', title: 'Fotografia & Vídeo', desc: 'Produção profissional com câmera, microfone e iluminação dedicados. Modelos reais — nada de stock photo.', items: ['Ensaio fotográfico profissional', 'Vídeo para Reels, TikTok e anúncios', 'Modelos e atores reais', 'Edição para plataformas digitais'] },
              { num: '04', badge: 'Complementar', title: 'Social Media', desc: 'Gestão de redes sociais quando a base já está estruturada. Conteúdo sem estratégia de negócio por trás é só barulho.', items: [], menor: true },
            ].map(({ num, badge, title, desc, items, menor }) => (
              <div key={num} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', opacity: menor ? 0.7 : 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{num}</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid var(--border)', color: 'var(--text-muted)', padding: '2px 10px', borderRadius: '999px' }}>{badge}</span>
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: items.length ? '1.5rem' : 0 }}>{desc}</p>
                {items.length > 0 && (
                  <ul style={{ listStyle: 'none' }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', padding: '0.5rem 0', borderBottom: i < items.length - 1 ? '1px solid var(--divider)' : 'none' }}>
                        <span style={{ opacity: 0.4 }}>→</span>{item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: 'var(--surface)', padding: 'clamp(4rem,8vw,6rem) 1.5rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Perguntas frequentes</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, textTransform: 'uppercase' }}>As respostas que<br/>ninguém dá direito.</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--divider)', padding: 'clamp(4rem,8vw,6rem) 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Vamos descobrir<br/>quanto você está perdendo.
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.65, fontWeight: 300 }}>
            O diagnóstico é o começo de tudo. Sem custo, sem enrolação.
          </p>
          <a href="https://wa.me/5585987772526" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#25D366', color: '#fff', padding: '1.25rem 2.5rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Quero meu diagnóstico gratuito
          </a>
        </div>
      </section>
    </div>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const items = [
    ['Quantos posts por mês vocês entregam?', 'Essa é a pergunta que resume o problema do mercado. Agências que vendem quantidade de posts vendem a ilusão de movimento. A Expresso não mede entrega em número de publicações — mede em resultado de negócio: ticket médio, pedidos gerados, margem recuperada.'],
    ['Vocês têm pacote básico?', 'Não. Cada restaurante tem um problema diferente — e o diagnóstico é o que define o que faz sentido trabalhar. Um pacote fechado sem diagnóstico é uma solução genérica para um problema que a gente ainda não conhece.'],
    ['Qual o prazo para ver resultado?', 'Depende do que está sendo trabalhado. Engenharia de cardápio e organização do delivery geram impacto nas primeiras semanas. Tráfego pago precisa de período de aprendizado do algoritmo (em torno de 7 dias). SEO local leva de 30 a 90 dias.'],
    ['Preciso de tudo ou posso contratar só uma parte?', 'Pode — e é exatamente o que o diagnóstico define. Às vezes o maior impacto está em estruturar o cardápio. Outras vezes é o delivery que está travado. O diagnóstico revela a prioridade.'],
    ['Vocês atendem qualquer tipo de restaurante?', 'Atendemos exclusivamente restaurantes — hamburguerias, pizzarias, delivery, dark kitchen, food trucks. Desde 2014, só gastronomia. A especialização é o que garante profundidade real.'],
  ]

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
      {items.map(([q, a], i) => (
        <div key={i} style={{ borderBottom: i < items.length - 1 ? '1px solid var(--divider)' : 'none' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{
            width: '100%', textAlign: 'left', padding: '1.5rem 2rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem',
            background: 'var(--bg)', color: 'var(--text)', border: 'none', cursor: 'pointer',
            fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1rem,2.5vw,1.25rem)',
            fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em'
          }}>
            {q}
            <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 2rem 1.5rem', background: 'var(--bg)' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

import { useState } from 'react'
