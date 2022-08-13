import React from 'react'
import styles from './styles.module.css'
import { default as LogoLinkedIn } from '../../assets/media-logos/logo-linkedin.svg'
import { default as LogoGithub } from '../../assets/media-logos/logo-github.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    let linksNames = [
        "<dev>",
        "<projects>",
        "<contact>"
    ]
        
  return (
      <div className={styles.navbar}>
              <a href="https://www.linkedin.com/in/tomasz-sawarzynski">
                <img src={LogoLinkedIn} width="30px" height="30px" className={styles.logo}/>
              </a>
              <a href="https://github.com/Sawarz">
                <img src={LogoGithub} width="30px" height="30px" className={styles.logo}/>
              </a>
          {linksNames.map((name) => {
              let destination = name.replace(/[<>]/g, "");
              return <Link to={`/${destination}`} className={styles.link}>{name}</Link>
          })}
      </div>
  )
}
