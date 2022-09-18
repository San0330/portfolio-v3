import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { validSectionTitle } from "../navItems";

const Education = () => {

    const sectionTitle: validSectionTitle = 'education'

    return (
        <Section name={sectionTitle}>
            <Heading1 title="Education" />
            <Heading2 title='Education' />
        </Section>
    )
}

export default Education;
