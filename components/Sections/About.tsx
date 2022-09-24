import IntroParagraph from "./UIs/IntroParagraph";
import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { AiOutlineArrowDown } from 'react-icons/ai'

const About = () => {
    return (
        <Section name='about'>

            <Heading1 title="who am i?" />

            <Heading2 title='About Me' />

            <IntroParagraph>
                <strong>Hi, my name is Santosh</strong>, I specialize in Full-stack development. Some interesting hobbies of mine are Cloud technologies and App Development. I am always ready to dive into the depth of the Technical world.
            </IntroParagraph>

            <IntroParagraph>
                My interest in programming emerged from CS courses. I started my journey by studying programming books and doing hands-on projects. I also participated in national as well as international programming contests &amp; hackathons to enhance my skills.
            </IntroParagraph>

            <ResumeDownloadButton />
        </Section>
    )
}

const ResumeDownloadButton = () =>
    <button
        className='bg-white shadow-xl mt-5 hover:ring-1 text-gray-600 border border-gray-300 inline-flex justify-center items-center gap-2 w-36 text-center rounded-lg px-5 py-3 cursor-pointer uppercase tracking-widest'
        onClick={() => window.open('/files/Santosh_Neupane_Resume.pdf', '_blank')}>

        <div className="animate-custom-bounce">
            <AiOutlineArrowDown size={20} />
        </div>

        Resume

    </button>

export default About;
