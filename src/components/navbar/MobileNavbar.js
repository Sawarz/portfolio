import { React, useState } from 'react'
import styles from './styles.module.css'
import { default as LogoLinkedIn } from '../../assets/media-logos/logo-linkedin.svg'
import { default as LogoGithub } from '../../assets/media-logos/logo-github.svg'
import { Link } from 'react-router-dom'

export default function MobileNavbar() {
    let linksNames = [
        "<dev>",
        "<projects>",
        "<contact>"
    ]

    const [menuItemsStyles, setMenuItemsStyles] = useState(`${styles.menuItems}`)
    const [line1Style, setLine1Style] = useState(`${styles.line} ${styles.line1}`)
    const [line2Style, setLine2Style] = useState(`${styles.line} ${styles.line2}`)
    const [line3Style, setLine3Style] = useState(`${styles.line} ${styles.line3}`)

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <div className={`${styles.navbar} ${styles.mobileNavbar}`}>
            <a href="https://www.linkedin.com/in/tomasz-sawarzyński-890a80241">
                <img src={LogoLinkedIn} width="30px" height="30px" className={styles.logo}/>
            </a>
            <a href="https://github.com/Sawarz">
                <img src={LogoGithub} width="30px" height="30px" className={styles.logo}/>
            </a>
            <div className={styles.hamburgerLines} onClick={() => {
                if (hamburgerOpen){
                    setLine1Style(`${styles.line} ${styles.line1}`);
                    setLine2Style(`${styles.line} ${styles.line2}`);
                    setLine3Style(`${styles.line} ${styles.line3}`);
                    setMenuItemsStyles(`${styles.menuItems}`)
                }
                else {
                    setLine1Style(line1Style + " " + styles.line1Animation);
                    setLine2Style(line2Style + " " + styles.line2Animation);
                    setLine3Style(line3Style + " " + styles.line3Animation);
                    setMenuItemsStyles(`${styles.menuItems} ${styles.menuItemsAnimation}`)
                }
                setHamburgerOpen(!hamburgerOpen);
            }}>
                <span className={line1Style}></span>
                <span className={line2Style}></span>
                <span className={line3Style}></span>
            </div>
            <div className={menuItemsStyles}>
                {linksNames.map((name) => {
                    let destination = name.replace(/[<>]/g, "");
                    return <Link to={`/${destination}`} className={styles.link}>{name}</Link>
                })}
            </div>
        </div>
  )
}
