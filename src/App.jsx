import React, { useState } from 'react'
import '../tailwind.css'
import {motion, AnimatePresence} from 'framer-motion'
import "./main.scss"

const App = () => {
  let [contactMenu, setContactMenu] = useState(false); 
  let [aboutMenu, setAboutMenu] = useState(false); 
  let [leftArrow, setLeftArrow] = useState(true); 
  let [rightArrow, setRightArrow] = useState(true); 
  const contactOpen = {
    open: { rotate: 180, x: "93vw", opacity: 1, color: 'white'}, 
    closed: { rotate: 0, x: 0, opacity: 1, scale: 1,}
  }
  const aboutOpen = {
    open: { rotate: 180, x: "-93vw", opacity: 1, color: 'white'}, 
    closed: { rotate: 0, x: 0, opacity: 1, scale: 1,}
  }
  const contactMenuOpen = {
    open: { x: "99.9vw"},
    closed: {x: 0}
  }
  const aboutMenuOpen = {
    open: { x: "-99.9vw"},
    closed: {x: 0}
  }
  const inView = {
    visible: { opacity: 1}, 
    
  }
  return (
    <div className='h-[100vh] w-[100%] mainCont bg-gray-900'>
        <motion.div initial={{y: -40}} animate={{y:0}} transition={{delay: .4, type: 'tween', duration: '.8', ease: "easeInOut", type: 'spring', stiffness: 100}} className='bg-black h-[5vh] flex justify-center items-center gap-5'>
            <h1 className='text-white text-sm'>JNR</h1>
            <a href='https://www.linkedin.com/in/julian-naranjo-ramos-026747247/' target='_blank'><img className='linkedImg' src='../linkedinlogo.png '/></a>
            <a href='https://github.com/Juleslazarus' target='_blank'><img className='githubImg' src='../githublogo.png '/></a>
        </motion.div>
        <motion.div className=' heroCont h-[95%] w-[100%] flex flex-col justify-center items-center mb-[10vh]'>
          <motion.h1 initial={{y: 40, opacity: 0, scale: .9}} animate={{y: 0, opacity: 1, scale: 1}} transition={{type: 'tween', duration: 1, type: 'spring', stiffness: 100, ease: "easeInOut"}} className='text-white text-[22.4px] p-10 text-center'>Hello, my name is Julian Naranjo Ramos, a self taught developer. </motion.h1>
          { leftArrow ? <motion.i initial={{x: -40, opacity: 0, scale: .9, rotate: 0}} animate={contactMenu ? "open" : "closed"} variants={contactOpen} transition={{type:'tween', duration: 1.5, ease: "easeInOut", type: 'spring', stiffness: 100}} className='contactMeBtn z-20 fa-solid fa-chevron-left text-[5vh] text-blue-500 animate-pulse absolute left-0 ' onClick={() => { setContactMenu(contactMenu => !contactMenu); setRightArrow(rightArrow => !rightArrow)}}></motion.i> : null }
          { rightArrow ? <motion.i initial={{x: 40, opacity: 0, scale: .9}}animate={aboutMenu ? "open" : "closed"} variants={aboutOpen} transition={{type: 'tween', duration: 1, ease: "easeInOut", type: 'spring', stiffness: 100}} className='techBtn fa-solid fa-chevron-right text-[5vh] text-blue-600 animate-pulse absolute right-0 absolute right-0 z-20' onClick={() => { setAboutMenu(aboutMenu => !aboutMenu); setLeftArrow(leftArrow => !leftArrow)}}></motion.i> : null }
          <motion.a initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'tween', duration: 1, ease: "easeInOut"}} href='#experience' className='p-5'><i className="fa-solid fa-arrow-down text-blue-500 text-[22.4px] animate-bounce p-5"></i></motion.a>
        </motion.div>
        <motion.div initial={{x: -"100rem"}} animate={contactMenu ? "open" : "closed"} variants={contactMenuOpen} className='contactMenu h-[100vh] w-[100%] bg-gray-800 z-10 absolute top-0 left-[-100%] flex flex-col items-center'>
          <h1 className='text-white text-center text-[22.4px]'>Contact Me</h1>
          <form action="https://formsubmit.co/juliannaranjoramos@gmail.com" method="POST" className='flex flex-col w-[80%] gap-5'>
            <label>Name</label>
            <input className='drop-shad ow-2xl' type="text" name="name" required placeholder='John Doe'/>
            <label>Email: </label>
            <input  type="email" name="email" required placeholder='Example@domain.com'/>
            <label>Leave A Message:</label>
            <textarea className='y-resize'></textarea>
            <button type="submit" className='p-4 bg-blue-600 text-white'>Send</button>
          </form>
        </motion.div>
        <motion.div initial={{x: -"100rem"}} animate={aboutMenu ? "open" : "closed"} variants={aboutMenuOpen} className='contactMenu h-[100vh] w-[100%] bg-gray-800 z-10 absolute top-0 right-[-100%] flex flex-col items-center'>
          <motion.div className="flex flex-col justify-center items-center gap-[10vh]">
            <h1 className='text-white text-center text-[22.4px]'>About Me</h1>
            <p className='text-white text-center text-[18px]'>I'm a self taught developer who is passionate for finding solutions to road-blocks. I'm quick to learn and love seeing ideas turn into real world projects.  </p>
              <p className='18px text-white text-center'>Technology I use:</p>
            <div className="techUsedCont flex gap-5">
              <img src='../tech/javascript.png'/>
              <img src='../tech/react.png'/>
              <img src='../tech/tailwinds.png'/>
              <img src='../tech/scss.png'/>
              <img src='../tech/ubuntu.png'/>
              <img src='../tech/firebase.png'/>
            </div>
            <div className='flex justify-center'>
              <a href='../resume.pdf' download='resume' className='border-2 border-blue-600 rounded-md p-5 text-white downloadResumeBtn'><button className='text-[14px]'>Download My Resume!</button></a>
            </div>
          </motion.div>
        </motion.div>
        {/* <div className='h-[10vh] w-[100%] '>
          <h1 className="text-transparent">a</h1> 
        </div> */}
        <motion.section  initial={{opacity: 0}} whileInView="visible" variants={inView} transition={{delay: .3}} id="experience" className='expSection h-[300vh] flex flex-col items-center justify-center gap-10 '>
          <motion.h1 className="text-white text-[22.4px] text-center mb-[5.5vh] overflow-hidden">Experience</motion.h1>
            <div className='projectsBox flex flex-col items-center'>
              <img className='projImg h-[auto] w-[70vw] ' src='../2duelanding.png'/>
              <div className='descTech'>
                <h1 className='text-white text-[18px] text-center'>This is the third version of a todo list app I created. This version uses firebase realtime DB & authentication to store user private & publicly shared collections for their todos. </h1>
                <div className='techBox flex justify-center items-center gap-5'>
                  <img src='../tech/firebase.png'/>
                  <img src='../tech/javascript.png'/>
                  <img src='../tech/scss.png'/>
                  <a href='https://github.com/Juleslazarus/2Due-3.0' target='_blank'><img src='./githublogo.png'/></a>
                  <a href='https://2due.co' target="_blank" className='text-white italic underline'>View Live Site</a>
                </div>
              </div>
            </div>
            <div className='projectsBox flex flex-col items-center'>
              <img className='projImg h-[auto] w-[70vw] ' src='../cnb.png'/>
              <div className='descTech'>
                <h1 className='text-white text-[18px] text-center'>This is a website made for a local activist group. I reached out and offered a website to display their activities in the community and offer information for residents.<br></br> Currently we are working together to develope a service where communities can do the same all in one website. </h1>
                <div className='techBox flex justify-center items-center gap-5'>
                  <img src='../tech/html5.png'/>
                  <img src='../tech/css3.png'/>
                  <a href='https://github.com/Juleslazarus/C.N.B' target='_blank'><img src='../githublogo.png'/></a> 
                </div>
              </div>
            </div>
            <div className='projectsBox flex flex-col items-center'>
              <img className='projImg h-[auto] w-[70vw] ' src='../speedway.png'/>
              <div className='descTech'>
                <h1 className='text-white text-[18px] text-center'>A website I made for a local auto detailing business made to automate their quoting process. </h1>
                <div className='techBox flex justify-center items-center gap-5'>
                  <img src='../tech/html5.png'/>
                  <img src='../tech/css3.png'/>
                  <a href='https://github.com/Juleslazarus/Speedway' target='_blank'><img src='../githublogo.png'/></a> 
                  <a href='https://www.speedwaydetailing.autos/' target="_blank" className='text-white italic underline'>View Live Site</a>
                </div>
              </div>
            </div>
        </motion.section>
        <footer className='bg-black'>
          <p className='text-center text-white'>This Portfolio Was Made With ReactJS! -JNR</p>
        </footer>
    </div>
  )
}

export default App