import { validSectionTitle } from "../navItems";
import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";

const Achievements = () => {

    const sectionTitle: validSectionTitle = 'achievements'

    return (
        <Section name={sectionTitle}>
            <Heading1 title='Achievements' />
            <Heading2 title='Achievements' />
        </Section>
    )
}

export default Achievements;
