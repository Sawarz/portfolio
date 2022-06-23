import { React, useState } from 'react'
import styles from './styles.module.css'
import { ReactComponent as LogoLinkedIn } from '../../assets/media-logos/logo-linkedin.svg'
import { ReactComponent as LogoGithub } from '../../assets/media-logos/logo-github.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [linkedInFill, setLinkedFill] = useState("white");
    const [githubFill, setGithubFill] = useState("white");

    let linksNames = [
        "<dev>",
        "<projects>",
        "<contact>"
    ]
  return (
      <div className={styles.navbar}>
              <a href="https://www.linkedin.com/in/tomasz-sawarzyński-890a80241">
                <LogoLinkedIn className={styles.logo} fill={linkedInFill} onMouseEnter={() => { 
                    setLinkedFill("rgb(160, 78, 255)");
                }}
                onMouseLeave={() => { 
                    setLinkedFill("white");
                      }} />
              </a>
              <a href="https://github.com/Sawarz">
                <LogoGithub className={styles.logo} fill={githubFill} onMouseEnter={() => { 
                    setGithubFill("rgb(160, 78, 255)");
                }}
                onMouseLeave={() => { 
                    setGithubFill("white");
                }}/>
              </a>
          {linksNames.map((name) => {
              let destination = name.replace(/[<>]/g, "");
              return <Link to={`/${destination}`} className={styles.link}>{name}</Link>
          })}
      </div>
  )
}
