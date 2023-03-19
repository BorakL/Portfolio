import './App.scss';
import "animate.css/animate.min.css";
import IntroAnimation from './components/introAnimation';
import { useEffect, useRef, useState } from 'react'; 
import Skill from './components/skill';
import LogoIcon from './components/logo';
import {FaGithubSquare, FaLinkedin, FaFacebookSquare} from "react-icons/fa"; 
import {GiHamburgerMenu} from "react-icons/gi";
import WorkItem from './components/workItem';
import { backendSkills, frontEndSkills, works } from './definitions';
import {MdClose} from "react-icons/md";



function App() {
  const[loading,setLoading]=useState(true)
  const[sidebarOpen,setSidebarOpen]=useState(false)
  const delay = 1000;
  const duration = 3000;
  const appRef = useRef();


  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false) 
      appRef.current.scrollTo({ top: 0, behavior:'smooth' })
    }, duration)
  },[])


  return (
    <div className="App" ref={appRef} >
      <div className="wrapper">
      {loading && 
      <IntroAnimation 
        delay={`${delay/1000}s`}
        duration={`${duration/1000}s`}
      />
      }
      
      <header>
        <div>
          <LogoIcon/>
        </div>
        <nav>
          <ul className={sidebarOpen ? "sidebarOpen" : ""}> 
            <li><a onClick={()=>setSidebarOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={()=>setSidebarOpen(false)} href="#work">Work</a></li>
            <li><a onClick={()=>setSidebarOpen(false)} href="#contact">Contact</a></li> 
            <li>
              <a onClick={()=>setSidebarOpen(false)} 
                  href="Resume.pdf"
                  target="_blank">Resume
              </a>
            </li>
          </ul> 
          <div onClick={()=>setSidebarOpen((prev)=>!prev)} className={`hamburgerMenu ${sidebarOpen ? "sidebarOpen" : ""}`}>
            {sidebarOpen ? <MdClose/> : <GiHamburgerMenu/>}  
          </div>   
        </nav>
      </header> 

      <main>
        
        <section className="about">
          <div>
            <p>Hi, my name is</p>
            <h1>LUKA BORAK</h1>  
            <p>I'm software developer specializing in designing and building full stack web application</p>
          </div>
          <div className='profileImage'>
            <div className='cover'></div>
            <img src="profile.jpg" alt="profile"/>
            <div className='frame'></div>

          </div>
        </section>
        
        <section id="skills" className='skills'>
          <h1>Skills</h1>
          <div className="skillContainer">
            <div className="skillGroup">
              <h2>Front-end development skills</h2> 
              {frontEndSkills.map((v,i)=><Skill key={i} skillName={v.name} skillLevel={v.level}/>)}
            </div>
            <div className="skillGroup">
              <h2>Back-end development skills</h2> 
              {backendSkills.map((v,i)=><Skill key={i} skillName={v.name} skillLevel={v.level}/>)}
            </div>
          </div> 
        </section>

        <section id="work" className="works">
          <h1>My Recent Work</h1>
          <p>Here are a few past projects I've worked on. </p>
          <div className='workContainer'>
            {
              works.map(w => <WorkItem title={w.title} image={w.image} link={w.link} description={w.description} technologies={w.technologies}/>)
            }
          </div>
        </section> 

        <section id="contact" className="contact">
          <h1>Get In Touch</h1> 
          <p>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <div className="emailButton">
            <a href="mailto:lborak88@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
          </div>
        </section>    
      </main>
     
      <footer>
        <div className='socialNetworks'>
          <div> <a href="https://github.com/BorakL"><FaGithubSquare/></a> </div>
          <div> <a href="https://www.linkedin.com/in/luka-borak-95a39a1b5/"><FaLinkedin/></a> </div>
          <div> <a href="https://www.facebook.com/luka.borak.7"><FaFacebookSquare/></a> </div>
        </div>
        <div className="copyright">
          Designed and built by Luka Borak.
        </div>
      </footer>
      </div> 
    </div>
  );
}

export default App;
