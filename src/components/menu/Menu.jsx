import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  const handleClick = (link) => {
    setActiveLink(link)
  }
  return (
    <>
      <div className="navigation">
        <ul>
          <li className={`list ${activeLink === '/' ? 'active' : ''}`}>
            <Link
                aria-current="page"
                to="/"
                onClick={() => handleClick('/')}
            >
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </Link>
          </li>

          <li className={`list ${activeLink === '/operateur' ? 'active' : ''}`}>
            <Link
                to="/operateur"
                onClick={() => handleClick('/operateur')}
            >
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="text">Opérateurs</span>
            </Link>
          </li>

          <li className={`list ${activeLink === '/autorisation' ? 'active' : ''}`}>
            <Link
                to="/autorisation"
                onClick={() => handleClick('/plus')}
            >
              <span className="icon">
                <ion-icon name="newspaper-outline"></ion-icon>
              </span>
              <span className="text">Autorisation</span>
            </Link>
          </li>

          <li className={`list ${activeLink === '/plus' ? 'active' : ''}`}>
            <Link
                to="/plus"
                onClick={() => handleClick('/plus')}
            >
              <span className="icon">
                <ion-icon name="add-circle-outline"></ion-icon>
              </span>
              <span className="text">Plus</span>
            </Link>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  )
}
