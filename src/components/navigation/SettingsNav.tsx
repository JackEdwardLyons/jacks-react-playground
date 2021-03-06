import React, { useState, useEffect, useRef } from 'react'
import { FaBell } from 'react-icons/fa'
import { BiMessageRoundedMinus, BiCog } from 'react-icons/bi'
import { BsCaretDownFill } from 'react-icons/bs'
import SettingsNavItem from './SettingsNavItem'
import ProfileMenu from './ProfileMenu'
import SettingsMenu from './SettingsMenu'
import { CSSTransition } from 'react-transition-group'

function SettingsNav() {
  const [openMenu, setOpenMenu] = useState('')
  const [menuHeight, setMenuHeight] = useState(0)
  const dropdownRef = useRef(null)

  const openNavItem = (navValue: string) => {
    setOpenMenu(prevVal => {
      return navValue === prevVal ? '' : navValue
    })
  }

  const toggleProfileNav = () => {
    if (openMenu) {
      setOpenMenu('')
      setMenuHeight(0)
    } else {
      openNavItem('profile')
    }
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
        <SettingsNavItem>
          <BiMessageRoundedMinus color="#050505" size="1.5rem" title="Messages" />
        </SettingsNavItem>

        <SettingsNavItem>
          <FaBell color="#050505" size="1.5rem" title="Notifications" />
        </SettingsNavItem>

        <SettingsNavItem>
          <BiCog color="#050505" size="1.5rem" title="Settings" />
        </SettingsNavItem>

        <SettingsNavItem
          onClick={() => {
            toggleProfileNav()
          }}
        >
          <BsCaretDownFill color="#050505" size="1.5rem" title="Profile" />
        </SettingsNavItem>

        <div
          className="dropdown"
          style={{
            height: menuHeight,
            border: openMenu ? '1px solid #474a4d' : '1px solid white',
            background: openMenu ? '#fff' : '#fff',
          }}
          ref={dropdownRef}
        >
          <CSSTransition
            in={openMenu === 'profile'}
            timeout={200}
            classNames="menu-primary"
            onEnter={calcHeight}
            unmountOnExit
          >
            <div className="menu">
              <ProfileMenu goToMenu="settings" setOpenMenu={setOpenMenu} />
            </div>
          </CSSTransition>

          <CSSTransition
            in={openMenu === 'settings'}
            timeout={200}
            classNames="menu-secondary"
            onEnter={calcHeight}
            unmountOnExit
          >
            <div className="menu">
              <SettingsMenu goToMenu="profile" setOpenMenu={setOpenMenu} />
            </div>
          </CSSTransition>
        </div>
      </ul>
    </nav>
  )
}

export default SettingsNav
