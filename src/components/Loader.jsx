import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
  const [slideUp, setSlideUp] = useState(false)
  const [hidden, setHidden]   = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setSlideUp(true),  950)
    const t2 = setTimeout(() => setHidden(true),   1800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (hidden) return null

  return (
    <div className={`${styles.loader} ${slideUp ? styles.up : ''}`}>
      <svg
        className={styles.logo}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x=".5" y=".5" width="51" height="51" stroke="#f97316" strokeWidth="1" />
        <text
          x="26"
          y="33"
          textAnchor="middle"
          fontFamily="'Space Mono', monospace"
          fontSize="16"
          fontWeight="700"
          fill="#f97316"
        >
          AÜ
        </text>
        <line x1="8" y1="42" x2="44" y2="42" stroke="#f97316" strokeWidth=".5" opacity=".35" />
      </svg>
    </div>
  )
}
