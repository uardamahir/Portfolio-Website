import { useEffect, useState } from 'react'
import { useLang } from '../hooks/useLang.jsx'
import { personal } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import styles from './Projects.module.css'

// ── İçerik = tek doğruluk kaynağı. GitHub yalnızca yıldız/link "zenginleştirir". ──
const CONTENT = {
  'password-manager-WEBextension': {
    title: 'Aegis — Sıfır-Bağımlılıklı Parola Yöneticisi',
    desc: 'Kimlik bilgilerini tamamen istemci tarafında şifreleyip yöneten bir Manifest V3 tarayıcı eklentisi. Saldırı yüzeyini en aza indirmek için bilinçli olarak sıfır üçüncü-taraf kütüphaneyle geliştirildi; tüm kriptografi tarayıcının yerel Web Crypto API’si üzerinden uygulandı.',
    tech: ['JavaScript', 'Web Crypto API', 'AES-GCM', 'PBKDF2', 'Manifest V3'],
  },
  'document-assistant-RAG': {
    title: 'Themis — RAG Belge Asistanı',
    desc: 'Kullanıcının kendi PDF’lerinden soruları yanıtlayan, her cevabın dayandığı kaynak pasajları gösteren ve belgeler yetersiz kaldığında yanıt vermeyi reddeden bir asistan. Hattı uçtan uca kurdum: sınır-duyarlı parçalama → embedding → vektör benzerlik araması → akışlı üretim; modele gidilmeden önce devreye giren bir benzerlik-eşiği kapısıyla.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL + pgvector', 'Ollama'],
  },
  'DoctorAppointment-BookingSystem': {
    title: 'Hastane Randevu Sistemi',
    desc: 'Hasta ve doktor yönetimi, randevu planlama ve bildirim sistemi içeren full-stack web uygulaması.',
    tech: ['MERN', 'JWT Auth', 'Cloudinary', 'Vercel'],
  },
  'FRAKTIA': {
    title: 'FRAKTIA — Coğrafi Konum Oyunu',
    desc: 'MERN altyapısıyla geliştirilen dedektif tarzı bir coğrafi konum oyunu. Geliştirme aşamasında.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  'Portfolio-Website': {
    title: 'Portfolyo Sitesi',
    desc: 'Projeleri GitHub API üzerinden canlı çeken kişisel portfolyo sitesi.',
    tech: ['React', 'Vite', 'CSS Modules', 'EmailJS', 'GitHub API'],
  },
  'algorithms-n-datastructes': {
    title: 'Algoritmalar, Veri Yapıları & Çeşitli Projeler',
    desc: 'Öğrendiğim teknolojileri pekiştirmek için geliştirdiğim projeler ve çözdüğüm problemler. Stack, queue, linked list, tree, graph; backtracking, dinamik programlama ve öz-yineleme üzerine uygulamalı çalışmalar. build-your-own-x ve crewAI gibi açık kaynak repolarını inceleyerek yazılım mimarisi ve çok-ajanlı YZ üzerine araştırmalar.',
    tech: ['JavaScript', 'Algorithms', 'Data Structures'],
  },
}

// ── Gösterim sırası (bu dizinin sırası = karttaki sıra) ──
const PINNED = [
  'password-manager-WEBextension',
  'document-assistant-RAG',
  'DoctorAppointment-BookingSystem',
  'FRAKTIA',
  'Portfolio-Website',
  'algorithms-n-datastructes',
]

const EXCLUDED = ['uardamahir']

// CONTENT'i temel alır; varsa GitHub verisiyle (yıldız, gerçek link) zenginleştirir.
function buildProjects(byName = {}) {
  return PINNED.map((name) => {
    const gh = byName[name] || {}
    const c = CONTENT[name] || {}
    return {
      name,
      title: c.title || gh.name || name,
      desc: c.desc || gh.description || '',
      tech: c.tech || (gh.language ? [gh.language] : []),
      stars: typeof gh.stargazers_count === 'number' ? gh.stargazers_count : null,
      repoUrl: gh.html_url || `https://github.com/${personal.githubUser}/${name}`,
      homepage: gh.homepage || null,
    }
  })
}

function RepoCard({ repo, t }) {
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
      <div className={styles.name}>{repo.title}</div>
      <div className={styles.desc}>{repo.desc || t('proj.empty')}</div>

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
  const { t } = useLang()
  const ref = useReveal()
  // CONTENT'ten anında dolu başlar → iskelet/boş kart yok, rate-limit olsa da görünür.
  const [repos, setRepos] = useState(() => buildProjects({}))

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${personal.githubUser}/repos?per_page=100&type=public`
    )
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data)) return
        const byName = Object.fromEntries(
          data
            .filter((r) => !EXCLUDED.includes(r.name))
            .map((r) => [r.name, r])
        )
        setRepos(buildProjects(byName))
      })
      .catch(() => {}) // sessizce CONTENT verisinde kal
  }, [])

  return (
    <section id="projects" className="section-wrapper" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">{t('s.projects')}</p>
        <div className={styles.header}>
          <h2 className={`section-title reveal d1 ${styles.title}`}>{t('t.projects')}</h2>
          
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
            <RepoCard key={repo.name} repo={repo} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
