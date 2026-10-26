import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { t } from './data/content'

const PrefsCtx = createContext(null)

const read = (k) => { try { return localStorage.getItem(k) } catch { return null } }
const write = (k, v) => { try { localStorage.setItem(k, v) } catch { /* storage unavailable */ } }

const systemDark = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches

export function PrefsProvider({ children }) {
  const [lang, setLang] = useState(() => (read('ts-lang') === 'ar' ? 'ar' : 'en'))
  const [theme, setTheme] = useState(() => read('ts-theme') || (systemDark() ? 'dark' : 'light'))

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = lang === 'ar' ? 'تغريد سعيد | مصممة UI/UX' : 'Taghreed Said | UI/UX Designer'
  }, [lang])

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  const toggleLang = useCallback(() => setLang((l) => { const n = l === 'en' ? 'ar' : 'en'; write('ts-lang', n); return n }), [])
  const toggleTheme = useCallback(() => setTheme((m) => { const n = m === 'dark' ? 'light' : 'dark'; write('ts-theme', n); return n }), [])

  return (
    <PrefsCtx.Provider value={{ lang, theme, isDark: theme === 'dark', tr: t[lang], toggleLang, toggleTheme }}>
      {children}
    </PrefsCtx.Provider>
  )
}

export const usePrefs = () => useContext(PrefsCtx)
