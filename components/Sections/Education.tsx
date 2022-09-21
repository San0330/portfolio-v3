import { useState } from "react";
import Section from "./Section";
import Accordion from "./UIs/Accordion";
import { Heading1, Heading2 } from "./UIs/Headings";

const Education = () => {

    return (
        <Section name='education'>
            <Heading1 title="Keen Learner" />
            <Heading2 title='Education' />
            <EducationAccordion />
        </Section>
    )
}

const EducationAccordion = () => {

    const degrees = [
        'Bachelor Degree, CSIT (2016 - 2021)',
        'Higher Secondary, Science (2014 - 2016)'
    ]

    const [activeAccordion, setActiveAccordion] = useState(degrees[0])

    return (
        <div className='flex flex-col mt-4 w-full'>
            <Accordion
                name={degrees[0]}
                activeAccordion={activeAccordion}
                setActive={setActiveAccordion} >

                <ul className="list-disc max-w-prose ml-8 space-y-4">
                    <li>
                        Completed Bachelor&apos;s degree in Computer Science and Information Technology from Tribhuvan University, secured first division.
                    </li>
                    <li>
                        Participated in National as well as International Programming Competition representing college.
                    </li>
                </ul>

            </Accordion>

            <Accordion
                name={degrees[1]}
                activeAccordion={activeAccordion}
                setActive={setActiveAccordion} >

                <ul className="list-disc max-w-prose ml-8 space-y-4">
                    <li>
                        Completed college, +2 Science with major in Maths.
                    </li>
                    <li>
                        Secured first division in HSEB Exam.
                    </li>
                </ul>

            </Accordion>
        </div>
    )
}


export default Education;
