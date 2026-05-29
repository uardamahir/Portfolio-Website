import { useEffect, useState } from 'react'
import { useLang } from '../hooks/useLang.jsx'
import { personal, fallbackProjects } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import styles from './Projects.module.css'

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript:  '#3178c6',
  Python:      '#3776ab',
  Go:          '#00add8',
  Rust:        '#dea584',
  CSS:         '#563d7c',
  HTML:        '#e34c26',
  Java:        '#b07219',
  Shell:       '#89e051',
}

// ── Repos to display, in this exact order ──
const PINNED = [
  'FRAKTIA',
  'DoctorAppointment-BookingSystem',
  'Full-Stack-Netflix-Clone',
  'algorithms-n-datastructes',
  'Portfolio-Website',
  'basic-projects',
]

// ── Repos to always exclude ──
const EXCLUDED = ['uardamahir']

function RepoCard({ repo, t }) {
  const color = LANG_COLORS[repo.language] || '#666'
  return (
    <div className={`${styles.card} pcard`}>
      <div className={styles.cardTop}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
          </svg>
        </div>
        <div className={styles.links}>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noreferrer">{t('proj.live')}</a>
          )}
          <a href={repo.html_url} target="_blank" rel="noreferrer">{t('proj.repo')}</a>
        </div>
      </div>
      <div className={styles.name}>{repo.name}</div>
      <div className={styles.desc}>{repo.description || t('proj.empty')}</div>
      <div className={styles.meta}>
        {repo.language && (
          <div className={styles.lang}>
            <div className={styles.dot} style={{ background: color }} />
            {repo.language}
          </div>
        )}
        <span>★ {repo.stargazers_count}</span>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skLine} style={{ height: 12, width: '40%' }} />
      <div className={styles.skLine} style={{ height: 18, width: '70%', marginTop: 12 }} />
      <div className={styles.skLine} style={{ height: 10, width: '90%', marginTop: 8 }} />
      <div className={styles.skLine} style={{ height: 10, width: '75%' }} />
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const ref = useReveal()
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${personal.githubUser}/repos?per_page=100&type=public`
    )
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          setRepos(fallbackProjects)
          return
        }
        // Filter to pinned repos and sort by PINNED order
        const map = Object.fromEntries(
          data
            .filter((r) => !EXCLUDED.includes(r.name))
            .map((r) => [r.name, r])
        )
        const filtered = PINNED
          .filter((name) => map[name])
          .map((name) => map[name])

        setRepos(filtered.length > 0 ? filtered : fallbackProjects)
      })
      .catch(() => setRepos(fallbackProjects))
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
          {repos === null
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : repos.map((repo) => <RepoCard key={repo.name} repo={repo} t={t} />)}
        </div>
      </div>
    </section>
  )
}