import React from 'react'
import NavRoutes from './NavRoutes'
import SettingsNav from './SettingsNav'

function NavBar() {
  return (
    <div className="flex justify-between p-4">
      <NavRoutes />
      <SettingsNav />
    </div>
  )
}

export default NavBar
