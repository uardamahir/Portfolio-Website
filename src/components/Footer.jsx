import { useLang } from '../hooks/useLang.jsx'
import { personal } from '../data/content.js'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>
        © {year} <em>{personal.name}</em>. {t('foot.copy')}
      </p>
    </footer>
  )
}
