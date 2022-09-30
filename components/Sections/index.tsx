import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Blogs from './Blogs'
import Style from './Sections.module.scss'

const Sections = () => {
    return (
        <div className={`${Style.sections} px-5 md:px-10`}>
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
