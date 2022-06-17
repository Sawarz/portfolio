import React from 'react'
import styles from './styles.module.css'

export default function Navbar() {
    let linksNames = [
        "<dev>",
        "<projects>",
        "<about>",
        "<contact>"
    ]
  return (
      <div className={styles.navbar}>
          {linksNames.map((name) => {
              return <a className={styles.link}>{name}</a>
          })}
      </div>
  )
}
