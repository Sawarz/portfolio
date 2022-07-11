import { useEffect } from 'react'
import styles from './styles.module.css'
import "animate.css/animate.min.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Confetti from 'react-confetti';
import { useMediaQuery } from 'react-responsive'


export default function Roadmap() {
  function AnimatedText(props) {
    const [ref, inView] = useInView();
    const control = useAnimation();

    const textVariant = {
      out: {
        opacity: 0,
        scale: 0,
        x: "40vw"
      },
      in: {
        opacity: 1,
        scale: [0.5, 0.5, 1],
        x: 0
      }
    }


    useEffect(() => {
      if (inView) {
        control.start("in");
      }
      else {
        control.start("out");
      }
    }, [control, inView]);

    return (<motion.div
      className={styles.roadmapText}
      ref={ref}
      variants={textVariant}
      initial="out"
      animate={control}
    >{props.children}</motion.div>)
  }

  function AnimatedContent(props) {
    const [ref, inView] = useInView();
    const control = useAnimation();

    const textVariant = {
      out: {
        opacity: 0,
        y: "30vh"
      },
      in: {
        opacity: 1,
        y: "0vh"
      }
    }


    useEffect(() => {
      if (inView) {
        control.start("in");
      }
      else {
        control.start("out");
      }
    }, [control, inView]);

    return (<motion.div
      className={props.className}
      ref={ref}
      variants={textVariant}
      initial="out"
      animate={control}
      transition={{duration: 1}}
    >{props.children}</motion.div>)
  }

  const isMobile = useMediaQuery({ maxWidth: 767 });

  let roadmapContentStyles = `${styles.roadmapContent}`;

  if (isMobile)
    roadmapContentStyles = `${styles.roadmapContent} ${styles.roadmapMobile}`;

  return (
    <div>
      <div className={styles.roadmapLine}>
        <div className={styles.roadmapPoint}>
          <div className={roadmapContentStyles}>
            <AnimatedText>Tomasz Sawarzyński - Aspiring Frontend Developer</AnimatedText>
            <AnimatedContent className={styles.animatedContent}>👨‍💻</AnimatedContent>
          </div>
        </div>
        <div className={styles.roadmapPoint}>
          <div className={roadmapContentStyles}>
            <AnimatedText>When it all started...</AnimatedText>
            <AnimatedContent className={styles.animatedContent}>👨‍🎨</AnimatedContent>
            <AnimatedContent className={styles.animatedContentText}>2018 - Simple python games</AnimatedContent>
          </div>
        </div>
        <div className={styles.roadmapPoint}>
        <div className={roadmapContentStyles}>
            <AnimatedText>Emerging into...</AnimatedText>
            <AnimatedContent className={styles.animatedContent}>🕵️</AnimatedContent>
            <AnimatedContent className={styles.animatedContentText}>2020 - First frontend interest</AnimatedContent>
          </div>
        </div>
        <div className={styles.roadmapPoint}>
          <div className={roadmapContentStyles}>
            <AnimatedText>Resulting in...</AnimatedText>
            <AnimatedContent className={styles.animatedContent}>🤹</AnimatedContent>
            <AnimatedContent className={styles.animatedContentText}>June 2021 - Attempts to learn JS, React</AnimatedContent>
          </div>
        </div>
        <div className={styles.roadmapPoint}>
        <div className={styles.confettiSource}></div>
        <AnimatedContent className={styles.confetti}><Confetti></Confetti></AnimatedContent>
          <div className={roadmapContentStyles}>
            <AnimatedText>Recent times...</AnimatedText>
            <AnimatedContent className={styles.animatedContent}>🏅</AnimatedContent>
            <AnimatedContent className={styles.animatedContentText}>2022 - Finishing projects and applying for a job!</AnimatedContent> 
          </div>
        </div>
        <div className={styles.roadmapEnd}></div>
      </div>
    </div>
  )
}
