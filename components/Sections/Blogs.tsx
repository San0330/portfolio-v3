import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { validSectionTitle } from "../navItems";

const Blogs = () => {

    const sectionTitle: validSectionTitle = 'blogs'

    return (
        <Section name={sectionTitle}>
            <Heading1 title="Blogs" />
            <Heading2 title='Blogs' />
        </Section>
    )
}

export default Blogs;
