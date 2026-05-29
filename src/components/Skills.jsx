import { useLang } from '../hooks/useLang.jsx'
import { skills } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import styles from './Skills.module.css'

export default function Skills() {
  const { lang, t } = useLang()
  const ref = useReveal()

  return (
    <section id="skills" className={`section-wrapper ${styles.skills}`} ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">{t('s.skills')}</p>
        <h2 className="section-title reveal d1">{t('t.skills')}</h2>

        <div className={styles.grid}>
          {skills.map((cat, i) => (
            <div key={i} className={`reveal d${Math.min(i + 2, 4)}`}>
              <div className={styles.catTitle}>{cat.category[lang]}</div>
              <div className={styles.pills}>
                {cat.items.map((item) => (
                  <span key={item} className={`${styles.pill} spill`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
