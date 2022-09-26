import { Project } from "../../types/types"
import { AiOutlineClose } from 'react-icons/ai'

type ProjectPopupProp = {
    project: Project | null
    click: Function
}

const ProjectPopup = ({ project, click }: ProjectPopupProp) => {
    return (
        <div className={`${project ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200 flex flex-col px-8 py-5 w-11/12 text-sm md:text-base md:w-1/2 mx-auto rounded-lg p-0 fixed z-50 top-8 left-5 md:top-[25vh] md:left-1/4 bg-blue-500 text-white`}>

            <div className='ml-auto top-5 cursor-pointer' onClick={() => click()}>
                <AiOutlineClose />
            </div>

            <h1 className='text-center text-lg uppercase tracking-widest mb-5'>
                {project?.name}
            </h1>

            <p className='max-w-prose max-h-36 leading-8 overflow-y-auto'>
                {project?.description}
            </p>

            <p className='font-bold tracking-wider underline text-white mt-5'>Key Techs</p>
            <div className="flex text-xs gap-5 flex-wrap mt-5">
                {
                    project?.key_techs.map((key_tech, idx) => {
                        return <div key={idx} className="px-2 py-1 md:px-4 md:py-2 text-white border border-white rounded-full">{key_tech}</div>
                    })
                }
            </div>


        </div>
    )
}

export default ProjectPopup 
