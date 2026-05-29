import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useLang } from '../hooks/useLang.jsx'
import { personal } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import styles from './Contact.module.css'

// ── SVG ICONS ───────────────────────────────────────
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

export default function Contact() {
  const { t } = useLang()
  const ref = useReveal()

  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'err'
  const [errMsg, setErrMsg] = useState('')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    const { name, email, message } = form
    if (!name || !email || !message) {
      setStatus('err'); setErrMsg(t('c.errAll')); return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('err'); setErrMsg(t('c.errEmail')); return
    }

    setStatus('sending')

    emailjs
      .send(
        personal.emailjs.serviceId,
        personal.emailjs.templateId,
        { name, email, message },
        personal.emailjs.publicKey
      )
      .then(() => {
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus('err')
        setErrMsg('Something went wrong. Please try again.')
      })
  }

  return (
    <section id="contact" className="section-wrapper" ref={ref}>
      <div className="section-inner">
        <p className="section-label reveal">{t('s.contact')}</p>
        <h2 className="section-title reveal d1">{t('t.contact')}</h2>

        <div className={styles.grid}>
          {/* Left — intro + socials */}
          <div className="reveal d2">
            <p className={styles.intro}>{t('c.intro')}</p>
            <div className={styles.socials}>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className={styles.soc}>
                <LinkedInIcon />
                <span>{personal.linkedin.replace('https://', '')}</span>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className={styles.soc}>
                <GitHubIcon />
                <span>{personal.github.replace('https://', '')}</span>
              </a>
              <a href={`mailto:${personal.email}`} className={styles.soc}>
                <MailIcon />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={`reveal d3 ${styles.formCol}`}>
            <div className={styles.group}>
              <label>{t('c.name')}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Arda Mahir Ünlü"
              />
            </div>
            <div className={styles.group}>
              <label>{t('c.email')}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
              />
            </div>
            <div className={styles.group}>
              <label>{t('c.message')}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              className={styles.submit}
              onClick={handleSubmit}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t('c.sending') : t('c.send')}
            </button>
            {status === 'ok'  && <div className={`${styles.msg} ${styles.ok}`}>{t('c.success')}</div>}
            {status === 'err' && <div className={`${styles.msg} ${styles.error}`}>{errMsg}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
