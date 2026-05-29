import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from '../data/translations.js'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = useCallback(
    (key) => translations[lang][key] ?? key,
    [lang]
  )

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'tr' : 'en'))
  }, [])

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
