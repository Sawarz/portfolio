import React from 'react'
import styles from './styles.module.css'
import BeePlanner from '../../assets/projects/bee-planner.png'
import ReactIcon from '../../assets/icons/react.svg'
import ReactRouterIcon from '../../assets/icons/reactrouter.svg'
import FirebaseIcon from '../../assets/icons/firebase.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/link.svg'

export default function Projects() {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.title}>My projects:</div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <img src={BeePlanner} className={styles.photo}></img>
          <div className={styles.projectInfo}>
            <div className={styles.projectTitle} style={{ backgroundColor: "rgba(255, 255, 40, 0.562)" }}>
              <div>Bee-planner</div>
              <a className={styles.link} href="https://regal-fox-83fa58.netlify.app">
                <LinkIcon className={styles.linkIcon}></LinkIcon>
              </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.description}>Fully working planning website, similar to Google Calendar</div>
            <div className={styles.divider}></div>
            <div className={styles.learnedList}>
              <div className={styles.projectSubtitle}>Used:</div>
              <div className={styles.learnedItem}>
                <img src={ReactIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>React</div>
              </div>
              <div className={styles.learnedItem}>
                <img src={ReactRouterIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>React Router</div>
              </div>
              <div className={styles.learnedItem}>
                <img src={FirebaseIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>Firebase</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <svg src={BeePlanner} className={styles.photo}></svg>
          <div className={styles.projectInfo}>
            <div className={styles.projectTitle} style={{ backgroundColor: "#74c0ff" }}>
              <div>React-shop</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
