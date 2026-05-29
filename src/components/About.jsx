import { useLang } from '../hooks/useLang.jsx'
import { about, personal } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import styles from './About.module.css'

export default function About() {
  const { lang, t } = useLang()
  const ref = useReveal()

  return (
    <section id="about" className={`section-wrapper ${styles.about}`} ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">{t('s.about')}</p>
        <h2 className="section-title reveal d1">{t('t.about')}</h2>

        <div className={styles.grid}>
          {/* Text + stats */}
          <div className="reveal d2">
            {about.paragraphs[lang].map((p, i) => (
              <p
                key={i}
                className={styles.para}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            <div className={styles.stats}>
              {about.stats.map((s) => (
                <div key={s.num} className={styles.stat}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar frame */}
          <div className={`${styles.frameCol} reveal d3`}>
            <div className={styles.frame}>
    <img
    src="/photo.png"
    alt="Arda Mahir Ünlü"
    className={styles.photo}
  />
  <div className={styles.deco} />
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
