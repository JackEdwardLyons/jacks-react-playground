import React from 'react'
import NavRoutes from './NavRoutes'
import SettingsNav from './SettingsNav'
import GlobalLayout from '../../layouts/GlobalLayout'

function NavBar() {
  return (
    <div className="flex justify-between p-4">
      <NavRoutes />
      <SettingsNav />
    </div>
  )
}

export default NavBar
