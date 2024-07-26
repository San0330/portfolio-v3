
import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";

const Blogs = () => {
    return (
        <Section name='blogs'>
            <Heading1 title="sharing knowledge" />
            <Heading2 title='Blogs' />
            <section className=" flex flex-col gap-10">
                <p className="block text-gray-400 text-2xl">Coming Soon!</p>
                <p className="block text-gray-400">Demo implentation on "blog" branch of github repository</p>
            </section>
        </Section>
    )
}

export default Blogs;