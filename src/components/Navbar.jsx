import { useEffect, useState } from 'react'
import { useLang } from '../hooks/useLang.jsx'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { key: 'nav.about',      href: '#about'      },
  { key: 'nav.education',  href: '#education'  },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects',   href: '#projects'   },
  { key: 'nav.skills',     href: '#skills'     },
  { key: 'nav.contact',    href: '#contact'    },
]

export default function Navbar() {
  const { lang, t, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>arda.dev</a>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <a href={href}>{t(key)}</a>
            </li>
          ))}
        </ul>

        <button className={styles.langBtn} onClick={toggleLang}>
          {lang === 'en' ? 'TR' : 'EN'}
        </button>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.open1 : ''} />
          <span className={menuOpen ? styles.open2 : ''} />
          <span className={menuOpen ? styles.open3 : ''} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(({ key, href }) => (
          <a key={key} href={href} onClick={() => setMenuOpen(false)}>
            {t(key)}
          </a>
        ))}
        <button className={styles.mobileLang} onClick={toggleLang}>
          {lang === 'en' ? 'TR' : 'EN'}
        </button>
      </div>
    </>
  )
}
