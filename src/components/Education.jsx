import { useLang } from '../hooks/useLang.jsx'
import { education } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Education() {
  const { lang, t } = useLang()
  const ref = useReveal()

  return (
    <section id="education" className="section-wrapper" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">{t('s.education')}</p>
        <h2 className="section-title reveal d1">{t('t.education')}</h2>

        <div className="row-list">
          {education.map((item, i) => (
            <div key={i} className={`row-item reveal d${Math.min(i + 2, 4)}`}>
              <div className="row-date">{item.period}</div>
              <div>
                <div className="row-title">{item.degree[lang]}</div>
                <div className="row-sub">{item.school[lang]}</div>
                <div className="row-desc">{item.desc[lang]}</div>
                {item.badge && <span className="edu-badge">{item.badge}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
