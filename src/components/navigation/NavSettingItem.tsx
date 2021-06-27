import React from 'react'

function NavSettingItem({ children, onClick }: { children: any; onClick?: any }) {
  return (
    <li onClick={onClick} className="rounded-full bg-[#e4e6eb] text-white p-4 hover:bg-gray-300 cursor-pointer">
      {children}
    </li>
  )
}

export default NavSettingItem
