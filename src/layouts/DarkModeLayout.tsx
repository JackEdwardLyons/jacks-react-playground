import React from 'react'
import clsx from 'clsx'
import { useRecoilValue } from 'recoil'
import { darkModeAtom } from '../components/navigation/SettingsMenu'

/**
 * Using a combination of Recoil state and TailwindCSS, this component
 * will inherit the darkMode state wherever it is set in the app.
 */
const DarkModeLayout: React.FC<{ children: any }> = ({ children }: { children: any }) => {
  const darkMode = useRecoilValue(darkModeAtom)
  return <div className={clsx([darkMode ? 'dark' : ''])}>{children}</div>
}

export default DarkModeLayout
