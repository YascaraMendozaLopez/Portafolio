'use client'

import Link from "next/link";
import { useState, useRef } from "react";
import styles from './Navigation.modules.css';


const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Skills',
  route: '/skills'
},
{
  label: 'Proyect',
  route: '/proyects'
}, {
  label: 'Experience',
  route: '/experience'
}, {
  label: 'Education',
  route: '/education'
}, {
  label: 'Contact',
  route: '/contact'
}
]

const Navigation = () => {

  let [nav, setNav] = useState("close");
  let [X, setX] = useState("X-close")

  const [isPlaying, setPlaying] = useState(false);

  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      audioPlayer.current.volume = 0.5;
    } else {
      audioPlayer.current.pause();
    }
  }

  const toggleLink = () => {
    if (nav ==="close" ) {
      setNav("open");
      setX("X-open");
    }
    else {
      setX("X-close");
      setNav("close");
    }
  }

  return (

    <div className='menu'>
      <div onClick={toggleLink} id="nav-icon1" className={X}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={nav}>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link onClick={toggleLink} className='a' href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}
export default Navigation;