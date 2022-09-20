import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import Timeline from "./UIs/Timeline";

const Experiences = () => {

    return (
        <Section name='experiences'>
            <Heading1 title="Years of Experience" />
            <Heading2 title='Work Experiences' />
            <ExperienceTimelines />
        </Section >
    )
}

const ExperienceTimelines = () => {
    return (
        <div className="relative flex flex-col gap-y-10 mt-12">
            <div className='absolute w-1 bg-gray-100 top-5 bottom-5 ml-[18px] z-10'>
            </div>

            <Timeline title="Software Developer" subTitle="Momayo Technology" color="bg-blue-400" dateRange="2021 - present" >
                <ul className="list-disc max-w-prose ml-8 space-y-4">
                    <li>Developed University EMIS for Lumbini Buddhist University</li>
                    <li>Used technologies like: Laravel, Tailwind, JS/Jquery, React etc</li>
                    <li>Worked on different modules like Account, Exam, PHD, Student etc</li>
                    <li>Optimized &amp; enhanced Legacy codes,Collaborated &amp; solved different business logic problems. </li>
                </ul>
            </Timeline>

            <Timeline title="Internship" subTitle="Neutroline Pvt Ltd" color="bg-red-400" dateRange="2020 - 2021" >
                <ul className="list-disc max-w-prose ml-8 space-y-4">
                    <li>Completed Internship &amp; got opportunity for full time job.</li>
                    <li>Worked on Employee Management System.</li>
                    <li>Used technologies like: PHP, NodeJS, Google Cloud, Bootstrap etc.</li>
                    <li>Worked on modules like taking job applications, recording employee leaves &amp; salary, login portal for managers, requesting &amp; managing holidays, allocating tasks to employee etc</li>
                    <li>Helped &amp; guided other interns.</li>
                    <li>Refactored &amp; optimized code done by previous developers.</li>
                </ul>
            </Timeline>
        </div>
    )
}

export default Experiences;
