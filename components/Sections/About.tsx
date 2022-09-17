import { ReactNode } from "react";
import Section from "./Section";

const About = () => {
    return (
        <Section>
            <div className="flex flex-col">
                <div className="text-sm text-gray-400 tracking-[5px] uppercase mb-8">About Me</div>
                <div className="font-bold text-gray-800 tracking-[5px] uppercase mb-20">Who Am I?</div>

                <IntroParagraph>
                    <strong>Hi, my name is Santosh</strong>, I specialize in Full-stack development. Some interesting hobbies of mine are Cloud technologies and App Development. I am always ready to dive into the depth of the Technical world
                </IntroParagraph>

                <IntroParagraph>
                    My interest in programming emerged from CS courses. I started my journey by studying programming books and doing hands-on projects. I also participated in national as well as international programming contests &amp; hackathons to enhance my skills.
                </IntroParagraph>

                <button
                    className='bg-gray-400 mt-5 text-white inline-flex justify-center gap-2 w-36 text-center rounded-lg px-5 py-3 cursor-pointer uppercase tracking-widest'
                    onClick={() => window.open('/files/Santosh_Neupane_Resume.pdf', '_blank')}>

                    <div className="animate-custom-bounce">
                        <i className="fa fa-arrow-down"></i>
                    </div>

                    Resume

                </button>

            </div>
        </Section>
    )
}

type IntroParagraphProps = {
    children: ReactNode
}

const IntroParagraph = (props: IntroParagraphProps) => {
    return (
        <p className="font-light mb-4 leading-7 text-justify">
            {props.children}
        </p>
    )
}
export default About;
