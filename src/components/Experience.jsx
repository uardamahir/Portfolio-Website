import { useLang } from '../hooks/useLang.jsx'
import { experience } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import styles from './Experience.module.css'

export default function Experience() {
  const { lang, t } = useLang()
  const ref = useReveal()

  return (
    <section id="experience" className={`section-wrapper ${styles.exp}`} ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">{t('s.experience')}</p>
        <h2 className="section-title reveal d1">{t('t.experience')}</h2>

        <div className="row-list">
          {experience.map((item, i) => (
            <div key={i} className={`row-item reveal d${Math.min(i + 2, 4)}`}>
              <div className="row-date" style={{ whiteSpace: 'pre-line' }}>
                {item.period[lang]}
              </div>
              <div>
                <div className="row-title">{item.title[lang]}</div>
                <div className="row-sub">{item.company[lang]}</div>
                <div className="row-desc">{item.desc[lang]}</div>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
