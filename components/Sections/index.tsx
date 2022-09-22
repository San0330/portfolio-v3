import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Blogs from './Blogs'
import Style from './Sections.module.css'
import { ReactNode } from 'react'

const Sections = ({ children }: { children: ReactNode }) => {
    return (
        <div className={`${Style.sections} relative px-5 md:px-10`}>
            {children} {/*  drawer hamburger button  */}
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Blogs />
        </div>
    )
}

export default Sections
