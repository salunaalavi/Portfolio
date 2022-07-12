import classes from './hero.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Modal from '../ui/modal/modal';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showModal, setShowModal] = useState();

  function buttonHandler() {
    window.location.href = '#projects';
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.greetings}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.columnLeft}>
            <h3 data-aos='fade-left'>Hi, saya Saluna Alavi.</h3>
            <h1 data-aos='fade-right'>
              Saya bekerja sebagai Frontend Developer dengan pengalaman dibidang e-commerce, dan forum group discussion.
            </h1>
            <p data-aos='fade-left' data-aos-delay='150'>
              Saya fasih dalam berbahasa Inggris{' '}
              <span>
                <Image
                  src='/images/usa.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>
              {' '}
              dan JavaScript{' '}
              <span>
                <Image
                  src='/images/js.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>
              .
            </p>
            <div className={classes.socialMedia}>
              <a
                href='https://github.com/salunaalavi'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-github' data-aos='flip-up'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/salunaalavi'
                target='_blank'
                rel='noreferrer'>
                <i
                  className='fab fa-linkedin'
                  data-aos='flip-up'
                  data-aos-delay='50'></i>
              </a>{' '}
              <a
                href='https://instagram.com/salunaalavi'
                target='_blank'
                rel='noreferrer'>
                <i
                  className='fab fa-instagram'
                  data-aos='flip-up'
                  data-aos-delay='100'></i>
              </a>{' '}
            </div>
            <div className={classes.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn btn-outlined'
                onClick={buttonHandler}>
                Project Saya
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn btn-filled'
                onClick={showModalHandler}>
                Hubungi Saya
              </motion.button>
            </div>
          </div>
        </div>
        <div className={classes.iconScrollContainer}>
          <a href='#projects'>
            <div
              className={classes.iconScroll}
              data-aos='fade-down'
              data-aos-offset='50'></div>
          </a>
        </div>
      </div>

      {showModal && <Modal contact onClose={closeModalHandler} />}
    </section>
  );
};
export default Hero;
