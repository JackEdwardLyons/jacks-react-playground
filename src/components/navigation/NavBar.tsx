import React from 'react'
import NavRoutes from './NavRoutes'
import NavSettings from './NavSettings'

function NavBar() {
  return (
    <div className="flex justify-between p-4">
      <NavRoutes />
      <NavSettings />
    </div>
  )
}

export default NavBar
