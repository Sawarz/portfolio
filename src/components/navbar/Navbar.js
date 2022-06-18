import { React, useState } from 'react'
import styles from './styles.module.css'
import { ReactComponent as LogoLinkedIn } from '../../assets/media-logos/logo-linkedin.svg'

export default function Navbar() {
    const [svgsFill, setSvgsFill] = useState("white");

    let linksNames = [
        "<dev>",
        "<projects>",
        "<about>",
        "<contact>"
    ]
  return (
      <div className={styles.navbar}>
          <div className={styles.media}>
              <a href="www.linkedin.com/in/tomasz-sawarzyński-890a80241">
                <LogoLinkedIn className={styles.logo} fill={svgsFill} onMouseEnter={() => { 
                    setSvgsFill("aqua");
                }}
                onMouseLeave={() => { 
                    setSvgsFill("white");
                }}/>
              </a>
          </div>
          {linksNames.map((name) => {
              return <a className={styles.link}>{name}</a>
          })}
      </div>
  )
}
