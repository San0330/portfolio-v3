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

            <Timeline title="Software Developer" subTitle="Momayo Technology" color="bg-blue-400" dateRange="2022 - present" >
                <ul className="list-disc max-w-prose ml-8 space-y-4 text-sm md:text-base">
                    <li>Developed EMIS application with various modules for both university staffs and students</li>
                    <li>Collaborated with clients to define software requirements</li>
                    <li>Participated in architecture, design and implementation of back-end features using Laravel, Jquery, React etc</li>
                    <li>Improved response time of application using SQL optimization technique, caching etc when generating summary reports</li>
                </ul>
            </Timeline>

            <Timeline title="Internship" subTitle="Neutroline Pvt Ltd" color="bg-red-400" dateRange="2021 - 2022" >
                <ul className="list-disc max-w-prose ml-8 space-y-4 text-sm md:text-base">
                    <li>Contributed to Employee Management System</li>
                    <li>Integrated third-party tools and components into application</li>
                    <li>Refactored and improved legacy code</li>
                    <li>Provided guidance to new interns</li>
                    <li>Collaborated with management and development partners regarding software application design status and project progress</li>                
                </ul>
            </Timeline>
        </div>
    )
}

export default Experiences;
