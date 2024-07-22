
import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";

const Blogs = () => {   
    return (
        <Section name='blogs'>
            <Heading1 title="sharing knowledge" />
            <Heading2 title='Blogs' />
            <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
                Coming Soon...
            </section>
        </Section>
    )
}

export default Blogs;