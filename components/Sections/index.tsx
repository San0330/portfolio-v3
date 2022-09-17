import About from './About'
import Style from './Sections.module.css'

const Sections = () => {
    return (
        <div className={Style.sections}>
                <About />
                <About />
        </div>
    )
}

export default Sections
