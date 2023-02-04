import React, { useState } from 'react'
import '../tailwind.css'
import {motion, AnimatePresence} from 'framer-motion'
import "./main.scss"

const App = () => {
  let [contactMenu, setContactMenu] = useState(false); 
  let [leftArrow, setLeftArrow] = useState(true); 
  let [rightArrow, setRightArrow] = useState(true); 
  const contactOpen = {
    open: { rotate: 180, x: "93vw", opacity: 1, color: 'white'}, 
    closed: { rotate: 0, x: 0, opacity: 1, scale: 1,}
  }
  const contactMenuOpen = {
    open: { x: "99.9vw"},
    closed: {x: 0}
  }
  const inView = {
    visible: { opacity: 1}, 
    
  }
  return (
    <div className='h-[100vh] w-[100%] mainCont bg-gray-900'>
        <motion.div initial={{y: -40}} animate={{y:0}} transition={{delay: .7, type: 'tween', duration: '.8', ease: "easeInOut"}} className='bg-black h-[5vh] flex justify-center items-center gap-5'>
            <h1 className='text-white text-sm'>JNR</h1>
            <a href='https://www.linkedin.com/in/julian-naranjo-ramos-026747247/' target='_blank'><img className='linkedImg' src='../linkedinlogo.png '/></a>
            <a href='https://github.com/Juleslazarus' target='_blank'><img className='githubImg' src='../githublogo.png '/></a>
        </motion.div>
        <motion.div className=' heroCont h-[95%] w-[100%] flex flex-col justify-center items-center mb-[10vh]'>
          <motion.h1 initial={{y: 40, opacity: 0, scale: .9}} animate={{y: 0, opacity: 1, scale: 1}} transition={{type: 'tween', duration: 1, type: 'spring', stiffness: 100, ease: "easeInOut"}} className='text-white text-[22.4px] p-10 text-center'>Hello, my name is Julian Naranjo Ramos, a self taught developer. </motion.h1>
          { leftArrow ? <motion.i initial={{x: -40, opacity: 0, scale: .9, rotate: 0}} animate={contactMenu ? "open" : "closed"} variants={contactOpen} transition={{type:'tween', duration: 1.5, ease: "easeInOut", type: 'spring', stiffness: 100}} className='contactMeBtn z-20 fa-solid fa-chevron-left text-[5vh] text-blue-500 animate-pulse absolute left-0 ' onClick={() => { setContactMenu(contactMenu => !contactMenu); setRightArrow(rightArrow => !rightArrow)}}></motion.i> : null }
          { rightArrow ? <motion.i initial={{x: 40, opacity: 0, scale: .9}} animate={{x: 0, opacity: 1, scale: 1}}transition={{type: 'tween', duration: 1, ease: "easeInOut", type: 'spring', stiffness: 100}} className='techBtn fa-solid fa-chevron-right text-[5vh] text-blue-600 animate-pulse absolute right-0'></motion.i> : null }
          <motion.a initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'tween', duration: 1, ease: "easeInOut"}} href='#experience' className='p-5'><i className="fa-solid fa-arrow-down text-blue-500 text-[22.4px] animate-bounce p-5"></i></motion.a>
        </motion.div>
        <motion.div initial={{x: -"100rem"}} animate={contactMenu ? "open" : "closed"} variants={contactMenuOpen} className='contactMenu h-[100vh] w-[100%] bg-gray-800 z-10 absolute top-0 left-[-100%] flex flex-col items-center'>
          <h1 className='text-white text-center'>Contact Me</h1>
          <form action="https://formsubmit.co/juliannaranjoramos@gmail.com" method="POST" className='flex flex-col w-[80%] gap-5'>
            <label>Name</label>
            <input className='drop-shad ow-2xl' type="text" name="name" required placeholder='John Doe'/>
            <label>Email: </label>
            <input  type="email" name="email" required placeholder='Example@domain.com'/>
            <label>Leave A Message:</label>
            <textarea className='y-resize'></textarea>
            <button type="submit" className='p-1 bg-blue-600 text-white'>Send</button>
          </form>
        </motion.div>
        {/* <div className='h-[10vh] w-[100%] '>
          <h1 className="text-transparent">a</h1> 
        </div> */}
        <motion.section  initial={{opacity: 0}} whileInView="visible" variants={inView} transition={{delay: .3}} id="experience" className='expSection h-[100vh] flex flex-col items-center justify-center gap-5'>
          <motion.h1 className="text-white text-[22.4px] text-center mb-[5.5vh] overflow-hidden">Experience</motion.h1>
            <div className="projectBox flex flex-row items-center justify-between w-[100%] overflow-hidden">
              <div className="descTech flex flex-col justify-center items-center">
                 <h1 className="text-center text-white text-[18px] mb-2 p-10 ">Third version of a todo list app I created. This version uses firebase realtime DB <br></br>& authentication to store user private &   publicly shared collections for their todos. </h1>
                 <div className='techBox flex gap-2'>
                  <img src='../tech/firebase.png'/>
                  <img src='../tech/javascript.png'/>
                  <img src='../tech/scss.png'/>
                  <a href='https://github.com/Juleslazarus/2Due-3.0' target='_blank'><img src='./githublogo.png'/></a>
                  <a href='https://2due.co' target="_blank" className='text-white italic underline'>View Live Site</a>
                 </div>
              </div>
              <img className='projImg h-[auto] w-[50vw]' src='../2duelanding.png'/>
            </div>
            <div className="projectBox flex flex-row items-center  w-[100%] justify-between overflow-hidden">
              <div className="descTech flex flex-col justify-center items-center">
                 <h1 className="text-center text-white text-[18px] mb-2 p-10  ">Website for a local activist group. I reached out and offered a website <br></br> to display their activities in the community and offer information for  <br></br>residents. Currently we are working together to develope a service <br></br> where communities can do the same all in one website.  </h1>
                 <div className='techBox flex gap-2'>
                  <img src='../tech/html5.png'/>
                  <img src='../tech/css3.png'/>
                 </div>
              </div>
              <img className='projImg h-[auto] w-[50vw]' src='../cnb.png'/>
            </div>
        </motion.section>
    </div>
  )
}

export default App