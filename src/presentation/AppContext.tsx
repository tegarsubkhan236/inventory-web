import { createContext, ReactNode, useContext, useState } from 'react'

type AppContextType = {
  currentTheme: string
  onThemeChange: (value: string) => void
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState('')

  const onThemeChange = (value: string) => {
    setCurrentTheme(value)
  }

  return <AppContext.Provider value={{ currentTheme, onThemeChange }}>{children}</AppContext.Provider>
}

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}
