import React from 'react'
import { atom, useRecoilState } from 'recoil'

export const darkModeAtom = atom({
  key: 'darkMode',
  default: false,
})

export default function SettingsMenu({ setOpenMenu, goToMenu }: { goToMenu: string; setOpenMenu: any }) {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)

  return (
    <ul className="dark:bg-black dark:text-white bg-white text-black text-blackshadow-md top-[110%] right-0 p-4 border-t-2 rounded-md cursor-pointer">
      <li className="border-b-2 mb-2 pb-2">
        <div className="flex flex-col">
          <span onClick={() => goToMenu && setOpenMenu(goToMenu)}>&larr; Go back here</span>
          <span>Settings here</span>
        </div>
      </li>
      <li>
        <input type="checkbox" onClick={e => setDarkMode(e.currentTarget.checked)} checked={darkMode} />{' '}
        <span>Dark mode: {darkMode ? '✅' : '❌'}</span>
      </li>
    </ul>
  )
}
