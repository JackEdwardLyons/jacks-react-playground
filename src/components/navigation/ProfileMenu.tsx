import React from 'react'

function ProfileMenu({ goToMenu, setOpenMenu }: { goToMenu: string; setOpenMenu: any }) {
  return (
    <ul className="bg-white text-black shadow-md top-[110%] right-0 p-4 rounded-md cursor-pointer">
      <li className="border-b-2 mb-2 pb-2">
        <div className="flex flex-col">
          <span>Jack Lyons</span>
          <span>See your profile</span>
        </div>
      </li>
      <li className="border-b-2 mb-2 pb-2">Give Feedback</li>

      <li
        className="relative"
        onClick={() => {
          goToMenu && setOpenMenu(goToMenu)
        }}
      >
        Settings
      </li>
    </ul>
  )
}

export default ProfileMenu
