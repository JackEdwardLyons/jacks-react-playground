import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'
import { BiMessageRoundedMinus, BiCog } from 'react-icons/bi'
import { BsCaretDownFill } from 'react-icons/bs'

function NavBar() {
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

      <nav className="flex items-center">
        <ul className="flex gap-4">
          <li className="rounded-full bg-[#e4e6eb] text-white p-4 hover:bg-gray-300 cursor-pointer" title="Messages">
            <BiMessageRoundedMinus color="#050505" size="1.5rem" />
          </li>
          <li
            className="rounded-full bg-[#e4e6eb] text-white p-4 hover:bg-gray-300 cursor-pointer"
            title="Notifications"
          >
            <FaBell color="#050505" size="1.5rem" />
          </li>
          <li className="rounded-full bg-[#e4e6eb] text-white p-4 hover:bg-gray-300 cursor-pointer" title="Settings">
            <BiCog color="#050505" size="1.5rem" />
          </li>
          <li className="rounded-full bg-[#e4e6eb] text-white p-4 hover:bg-gray-300 cursor-pointer" title="Settings">
            <BsCaretDownFill color="#050505" size="1.5rem" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
