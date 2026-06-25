import { useEffect, useState } from 'react'
import { useLang } from '../hooks/useLang.jsx'
import { personal } from '../data/content.js'
import { projectContent } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'
import styles from './Projects.module.css'

// ── Çift dilli alanı çöz: {en,tr} ise dile göre seç, düz string ise olduğu gibi ──
const pick = (v, lang) =>
  v && typeof v === 'object' && !Array.isArray(v)
    ? v[lang] ?? v.en ?? ''
    : v ?? ''

// API çökerse / lokalde /api yoksa gösterilecek sıra = içerik dosyasının sırası.
const FALLBACK_ORDER = Object.keys(projectContent)

// GitHub'dan gelen pin'i, varsa küratörlü metinle zenginleştirir.
function fromPinned(gh) {
  const c = projectContent[gh.name] || {}
  return {
    name: gh.name,
    title: c.title || gh.name,
    desc: c.desc || gh.description || '',
    tech: c.tech || [gh.language, ...(gh.topics || [])].filter(Boolean),
    stars: typeof gh.stars === 'number' ? gh.stars : null,
    repoUrl: gh.url || `https://github.com/${personal.githubUser}/${gh.name}`,
    homepage: gh.homepage || null,
  }
}

// Sadece yerel içerikten kart üretir (pin verisi yokken).
function fromContent(name) {
  const c = projectContent[name]
  return {
    name,
    title: c.title,
    desc: c.desc,
    tech: c.tech || [],
    stars: null,
    repoUrl: `https://github.com/${personal.githubUser}/${name}`,
    homepage: null,
  }
}

function RepoCard({ repo, t, lang }) {
  const title = pick(repo.title, lang)
  const desc = pick(repo.desc, lang)

  return (
    <div className={`${styles.card} pcard`}>
      <div className={styles.cardTop}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
          </svg>
        </div>
        <div className={styles.links}>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noreferrer">{t('proj.live')}</a>
          )}
          <a href={repo.repoUrl} target="_blank" rel="noreferrer">{t('proj.repo')}</a>
        </div>
      </div>

      <div className={styles.name}>{title}</div>
      <div className={styles.desc}>{desc || t('proj.empty')}</div>

      {repo.tech.length > 0 && (
        <div className={styles.tech}>
          {repo.tech.map((item) => (
            <span key={item} className={styles.chip}>{item}</span>
          ))}
        </div>
      )}

      {repo.stars != null && (
        <div className={styles.meta}>
          <span>★ {repo.stars}</span>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const { t, lang } = useLang()
  const ref = useReveal()

  // Anında dolu başlar → iskelet/boş kart yok, /api erişilemese de görünür.
  const [repos, setRepos] = useState(() => FALLBACK_ORDER.map(fromContent))

  useEffect(() => {
    fetch('/api/pinned')
      .then((r) => r.json())
      .then(({ pinned }) => {
        if (!Array.isArray(pinned) || pinned.length === 0) return // fallback'te kal
        setRepos(pinned.map(fromPinned))
      })
      .catch(() => {}) // sessizce yerel içerikte kal
  }, [])

  return (
    <section id="projects" className="section-wrapper" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">{t('s.projects')}</p>
        <div className={styles.header}>
          <h2 className={`section-title reveal d1 ${styles.title}`}>{t('t.projects')}</h2>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className={`reveal d2 ${styles.ghLink}`}
          >
            {t('proj.github')}
          </a>
        </div>

        <div className={styles.grid}>
          {repos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} t={t} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
