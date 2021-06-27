import React from 'react'
// import clsx from 'clsx'

export default function SettingsMenu({ setOpenMenu, goToMenu }: { goToMenu: string; setOpenMenu: any }) {
  return (
    <ul className="absolute bg-white text-black shadow-md top-[110%] right-0 p-4 border-t-2 rounded-md cursor-pointer">
      <li className="border-b-2 mb-2 pb-2">
        <div className="flex flex-col">
          <span
            onClick={() => {
              goToMenu && setOpenMenu(goToMenu)
            }}
          >
            &larr; Go back here
          </span>
          <span>Settings here</span>
        </div>
      </li>
    </ul>
  )
}
