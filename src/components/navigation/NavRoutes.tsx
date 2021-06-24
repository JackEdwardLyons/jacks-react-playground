import React from 'react'
import { Link } from 'react-router-dom'

function NavRoutes() {
  return (
    <div className="flex justify-between p-4">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dad-jokes">Dad Jokes with x state</Link>
          </li>
          <li>
            <Link to="/traffic-lights">Traffic Lights with x state</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavRoutes
