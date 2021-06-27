import React, { useState, useEffect, useRef } from 'react'
import { FaBell } from 'react-icons/fa'
import { BiMessageRoundedMinus, BiCog } from 'react-icons/bi'
import { BsCaretDownFill } from 'react-icons/bs'
import NavSettingItem from './NavSettingItem'
import ProfileMenu from './ProfileMenu'
import SettingsMenu from './SettingsMenu'
import { CSSTransition } from 'react-transition-group'

function NavSettings() {
  const [openMenu, setOpenMenu] = useState('')
  const [menuHeight, setMenuHeight] = useState(0)
  const dropdownRef = useRef(null)

  const openNavItem = (navValue: string) => {
    setOpenMenu(prevVal => {
      return navValue === prevVal ? '' : navValue
    })
  }

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  useEffect(() => {
    if (dropdownRef?.current?.offsetHeight) {
      setMenuHeight(dropdownRef.current.offsetHeight)
    }
  }, [])

  return (
    <nav className="flex items-center">
      <ul className="flex gap-4 relative">
        <NavSettingItem>
          <BiMessageRoundedMinus color="#050505" size="1.5rem" title="Messages" />
        </NavSettingItem>

        <NavSettingItem>
          <FaBell color="#050505" size="1.5rem" title="Notifications" />
        </NavSettingItem>

        <NavSettingItem>
          <BiCog color="#050505" size="1.5rem" title="Settings" />
        </NavSettingItem>

        <NavSettingItem
          onClick={() => {
            openNavItem('profile')
          }}
        >
          <BsCaretDownFill color="#050505" size="1.5rem" title="Profile" />
        </NavSettingItem>

        <div style={{ height: menuHeight }} ref={dropdownRef}>
          <CSSTransition
            in={openMenu === 'profile'}
            timeout={200}
            classNames="menu-transition"
            onEnter={calcHeight}
            unmountOnExit
          >
            <div className="profile-menu">
              <ProfileMenu goToMenu="settings" setOpenMenu={setOpenMenu} />
            </div>
          </CSSTransition>

          <CSSTransition
            in={openMenu === 'settings'}
            timeout={200}
            classNames="menu-transition"
            onEnter={calcHeight}
            unmountOnExit
          >
            <div className="settings-menu">
              <SettingsMenu goToMenu="profile" setOpenMenu={setOpenMenu} />
            </div>
          </CSSTransition>
        </div>
      </ul>
    </nav>
  )
}

export default NavSettings
