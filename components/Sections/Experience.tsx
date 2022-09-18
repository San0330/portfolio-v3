import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { validSectionTitle } from "../navItems";

const Experiences = () => {

    const sectionTitle: validSectionTitle = 'experiences'

    return (
        <Section name={sectionTitle}>

            <Heading1 title="Experiences" />
            <Heading2 title='Work Experiences' />

        </Section>
    )
}

export default Experiences;
