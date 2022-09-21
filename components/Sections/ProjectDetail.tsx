import Image from "next/image"
import { Project } from "../../types/types"

type ProjectDetailProp = {
    project: Project
}

const ProjectDetail = ({ project }: ProjectDetailProp) => {
    return (
        <div className='flex flex-col px-5 py-8 rounded p-0 fixed z-50 top-[25vh] left-1/4 bg-blue-500 text-white'>

            <h1 className='text-center text-lg uppercase tracking-widest mb-5'>{project.name}</h1>

            <div className="flex">

                <div className='flex flex-col'>
                    <div className="w-48 h-48 rounded-lg overflow-hidden relative">
                        <Image src={`/images/projects/${project.image}`} layout='fill' className='absolute object-contain' alt="project image" />
                    </div>

                    <div className="flex justify-around text-xs gap-5 flex-wrap mt-5">
                        <div className="px-4 py-2 bg-green-400 text-gray-800 rounded">Code</div>
                        <div className="px-4 py-2 bg-purple-400 text-gray-800 rounded">Live</div>
                    </div>
                </div>

                <div className='flex flex-col pl-5'>
                    <p className='max-w-prose h-36 overflow-y-auto'>{project.description}</p>

                    <p className='font-bold tracking-wider underline text-white mt-5'>Key Techs</p>
                    <div className="flex text-xs gap-5 flex-wrap mt-5">
                        {
                            project.key_techs.map((key_tech, idx) => {
                                return <div key={idx} className="px-4 py-2 bg-white text-gray-800 rounded">{key_tech}</div>
                            })
                        }
                    </div>

                </div>

            </div>


        </div>
    )
}

export default ProjectDetail
