import React from 'react'
import styles from './styles.module.css'
import BeePlanner from '../../assets/projects/bee-planner.png'
import ReactShop from '../../assets/projects/react-shop.png'
import Breddit from '../../assets/projects/breddit.png'
import ReactIcon from '../../assets/icons/react.svg'
import ReactRouterIcon from '../../assets/icons/reactrouter.svg'
import FirebaseIcon from '../../assets/icons/firebase.svg'
import ReduxIcon from '../../assets/icons/redux.svg'
import HerokuIcon from '../../assets/icons/heroku.png'
import TypescriptIcon from '../../assets/icons/typescript.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/link.svg'
import { useMediaQuery } from 'react-responsive'

export default function Projects() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  return (
    <div className={styles.projectsPage}>
      <div className={styles.title}>My projects:</div>
      <div className={styles.projects}>
      <div className={isMobile ? styles.mobileProject : styles.project}>
          <img src={Breddit} className={styles.photo}></img>
          <div className={styles.projectInfo}>
            <div className={styles.projectTitle} style={{ backgroundColor: "#ffd588" }}>
              <div>Breddit</div>
              <a className={styles.link} href="https://sawarz.github.io/breddit">
                <LinkIcon className={styles.linkIcon}></LinkIcon>
              </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.description}>A reddit mockup site for bread lovers</div>
            <div className={styles.divider}></div>
            <div className={styles.learnedList}>
              <div className={styles.projectSubtitle}>Used:</div>
              <div className={styles.learnedItem}>
                <img src={TypescriptIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>TypeScript</div>
              </div>
              <div className={styles.learnedItem}>
                <img src={ReactIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>React</div>
              </div>
              <div className={styles.learnedItem}>
                <img src={FirebaseIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>Firebase</div>
              </div>
            </div>
          </div>
        </div>
        <div className={isMobile ? styles.mobileProject : styles.project}>
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
                <img src={ReduxIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>Redux</div>
              </div>
              <div className={styles.learnedItem}>
                <img src={FirebaseIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>Firebase</div>
              </div>
            </div>
          </div>
        </div>
        <div className={isMobile ? styles.mobileProject : styles.project}>
          <img src={ReactShop} className={styles.photo}></img>
          <div className={styles.projectInfo}>
            <div className={styles.projectTitle} style={{ backgroundColor: "#74c0ff" }}>
              <div>React-shop</div>
              <a className={styles.link} href="https://sawarz.github.io/react-shop">
                <LinkIcon className={styles.linkIcon}></LinkIcon>
              </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.description}>A shop mockup website where you can buy all things related to React libraries</div>
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
                <img src={ReduxIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>Redux</div>
              </div>
              <div className={styles.learnedItem}>
                <img src={HerokuIcon} className={styles.learnedIcon}></img>
                <div className={styles.learnedText}>API hosted on Heroku</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
