import Section from "./Section";
import IntroParagraph from "./UIs/IntroParagraph";
import SkillPill from "./UIs/SkillPill";
import { Heading1, Heading2 } from "./UIs/Headings";

const Skills = () => {

    const skills = ['NestJS', 'ReactJS/NextJS', 'Git', 'Javascript/Typescript', 'PHP/Laravel', 'Tailwind CSS', 'My SQL']

    const familiarSkills = ['MongoDB', 'Docker', 'Vim', 'Linux', 'Flutter', 'Python', 'Tensorflow']

    return (
        <Section name='skills'>

            <Heading1 title='My Specialty' />

            <Heading2 title='Skills' />

            <IntroParagraph>
                A quick learner & passionate software engineer.
            </IntroParagraph>

            <IntroParagraph>
                The list includes all the technology with which I work on daily basis, as a hobby or have familiarity with.
            </IntroParagraph>

            <SkillsList skills={skills} />

            <div className="text-sm text-gray-500 mt-8">
                Good familiarity with:
            </div>

            <SkillsList skills={familiarSkills} />

        </Section>
    )
}

const SkillsList = ({ skills }: { skills: string[] }) => {
    return (
        <div className='flex gap-4 md:gap-8 flex-row flex-wrap mt-5'>
            {
                skills.map(skill => <SkillPill key={skill} title={skill} />)
            }
        </div>
    )
}
export default Skills;
