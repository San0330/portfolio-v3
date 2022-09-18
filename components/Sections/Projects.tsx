import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { validSectionTitle } from "../navItems";

const Projects = () => {

    const sectionTitle: validSectionTitle = 'projects'

    return (
        <Section name={sectionTitle}>
            <Heading1 title="Projects" />
            <Heading2 title='Projects' />
        </Section>
    )
}

export default Projects;
