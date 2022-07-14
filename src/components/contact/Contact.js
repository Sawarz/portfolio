import { React, useState } from 'react';
import styles from './styles.module.css';
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';

export default function Contact(props) {

  const isMobile = useMediaQuery({ maxWidth: 800 });
  const shortenMail = useMediaQuery({ maxWidth: 1500 });

  const [hiddenEmail, setHiddenEmail] = useState(null)

  function sendEmail(values){
    emailjs.send("service_pyw6dc9", "template_4gck72v", values, process.env.REACT_APP_EMAILJS_KEY)
    .then((res)=>{
      if(res.status === 200)
        alert("Message sent!")
      else
        alert("There was a problem sending the message!")
    })
  }

	return (
		<div className={isMobile ? styles.mobileContact : styles.contact}>
      <div className={isMobile ? styles.mobileLeftSide : styles.leftSide}>
        <div className={styles.title}>Contact me</div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          }}
          onSubmit={(values) => {
            sendEmail(values)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formElement}>
                <input
                  id='firstName'
                  name='firstName'
                  type='text'
                  onChange={handleChange}
                  value={values.firstName}
                  className={styles.input}
                  placeholder="First name"
                />
                {errors.name ? <div className={styles.error}>{errors.name}</div> : null}
              </div>
              <div className={styles.formElement}>
                <input
                  id='lastName'
                  name='lastName'
                  type='text'
                  onChange={handleChange}
                  value={values.lastName}
                  placeholder="Last name"
                  className={styles.input}
                ></input>
              </div>
              <div className={styles.formElement}>
                <input
                  id='email'
                  name='email'
                  type='email'
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email"
                  className={styles.input}
                ></input>
              </div>
              <div className={styles.formElement}>
                <textarea
                  className={styles.messageInput}
                  id='message'
                  name='message'
                  type='text'
                  onChange={handleChange}
                  value={values.message}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className={styles.submitButtonContainer}>
                <button className={styles.submitButton} type="submit">
                  Submit
                </button>
              </div>
            </form>)}
        </Formik>
      </div>
			<div className={isMobile ? styles.mobileRightSide : styles.rightSide}>
        <div className={styles.infoTitle}>Contact info: </div>
        {shortenMail ? <><button className={styles.emailButton} onClick={()=>{
          if(hiddenEmail == null)
            setHiddenEmail(<div className={styles.hiddenEmail}>tomasz.sawarzynski@gmail.com</div>)
          else
            setHiddenEmail(null);
        }}>
          Show Email
        </button> 
        {hiddenEmail}</>
        : <div className={styles.info}>tomasz.sawarzynski@gmail.com</div>}
        <a href="https://www.linkedin.com/in/tomasz-sawarzyński-890a80241" className={styles.info}>LinkedIn</a>
        <a href="https://github.com/Sawarz" className={styles.info}>Github</a>
      </div>
		</div>
	);
}