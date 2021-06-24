import React from 'react'
import { FaBell } from 'react-icons/fa'
import { BiMessageRoundedMinus, BiCog } from 'react-icons/bi'
import { BsCaretDownFill } from 'react-icons/bs'
import NavSettingItem from './NavSettingItem'

function NavSettings() {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-4">
        <NavSettingItem>
          <BiMessageRoundedMinus color="#050505" size="1.5rem" title="Messages" />
        </NavSettingItem>

        <NavSettingItem>
          <FaBell color="#050505" size="1.5rem" title="Notifications" />
        </NavSettingItem>

        <NavSettingItem>
          <BiCog color="#050505" size="1.5rem" title="Settings" />
        </NavSettingItem>

        <NavSettingItem>
          <BsCaretDownFill color="#050505" size="1.5rem" title="Settings" />
        </NavSettingItem>
      </ul>
    </nav>
  )
}

export default NavSettings
