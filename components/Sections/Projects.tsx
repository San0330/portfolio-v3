import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { projects, projectCategories } from '../../data/projects'
import { Project } from '../../types/types'

const Projects = () => {
    return (
        <Section name='projects'>
            <Heading1 title="Demo / Hobby Projects" />
            <Heading2 title='Projects' />

            <div className='flex gap-5 mb-5'>

                <div className='cursor-pointer uppercase tracking-wider text-blue-400 border-b border-blue-400'>Featured</div>
                {
                    projectCategories.map(category => {
                        return (
                            <div className='cursor-pointer uppercase tracking-wider'>{category}</div>
                        )
                    })
                }
            </div>

            <div className='grid grid-cols-2 gap-8'>
                {
                    projects.map(project => {
                        return <ProjectBox project={project} />
                    })
                }
            </div>
        </Section >
    )
}

type ProjectBoxProp = {
    project: Project
}

const ProjectBox = ({ project }: ProjectBoxProp) => {
    return (
        <div className="relative w-96 h-72 border border-gray-300 shadow-lg overflow-hidden rounded-md group">

            <img src={`images/projects/${project.image}`} className='absolute h-full w-full object-cover' />

            <div className='relative group-hover:visible invisible bg-blue-500 text-white w-full h-full'>

                <div className="absolute p-5 flex flex-col h-full">
                    <h3 className='font-semibold text-lg uppercase tracking-wider'>
                        {project.name}
                    </h3>

                    <p className='text-xs'>
                        {project.type}
                    </p>

                    <p className='max-w-prose mt-5 leading-8 text-justify'>
                        {project.description.substring(0, 108)}
                        {project.description.length > 100 ? '...' : ''}
                    </p>

                    <div className='mt-auto flex gap-5'>
                        <button className='border px-3 py-1 rounded bg-white text-blue-500 flex flex-row gap-3 items-center'>
                            <AiOutlineEye />
                            Detail
                        </button>
                        <button className='border px-3 py-1 rounded flex flex-row gap-3 items-center'>
                            <AiFillGithub />
                            code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
