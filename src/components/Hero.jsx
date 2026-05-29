import { useLang } from '../hooks/useLang.jsx'
import { personal } from '../data/content.js'
import styles from './Hero.module.css'

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{personal.role[lang]}</p>
        <h1 className={styles.name}>
          {personal.nameShort}<br />
          <em>{personal.nameLast}</em>
        </h1>
        <p className={styles.tagline}>{personal.tagline[lang]}</p>
        <div className={styles.cta}>
          <a href="#projects" className="btn-primary">{t('hero.cta1')}</a>
          <a href="#contact"  className="btn-ghost"  >{t('hero.cta2')}</a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>{t('hero.scroll')}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
