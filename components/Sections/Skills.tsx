import Section from "./Section";
import IntroParagraph from "./UIs/IntroParagraph";
import { validSectionTitle } from "../navItems";
import SkillPill from "./UIs/SkillPill";
import { Heading1, Heading2 } from "./UIs/Headings";

const Skills = () => {

    const sectionTitle: validSectionTitle = 'skills'

    const skills = ['NestJS', 'ReactJS/NextJS', 'Laravel', 'Git', 'Javascript/Typescript', 'PHP', 'Tailwind CSS', 'My SQL']

    const familiarSkills = ['MongoDB', 'Docker', 'Vim', 'Linux', 'Flutter']


    return (
        <Section name={sectionTitle}>

            <Heading1 title='My Specialty' />

            <Heading2 title='Skills' />

            <IntroParagraph>
                A quick learner & passionate software engineer.
            </IntroParagraph>

            <IntroParagraph>
                The list includes all the technology with which I work on daily basis, as a hobby or have familiarity with.
            </IntroParagraph>

            <div className='flex gap-8 flex-row flex-wrap mt-5'>
                {
                    skills.map(skill => <SkillPill key={skill} title={skill} />)
                }
            </div>

            <div className="text-sm text-gray-500 mt-8">
                Good familiarity with:
            </div>

            <div className='flex gap-8 flex-row flex-wrap mt-5'>
                {
                    familiarSkills.map(skill => <SkillPill key={skill} title={skill} />)
                }
            </div>
        </Section>
    )
}

export default Skills;
