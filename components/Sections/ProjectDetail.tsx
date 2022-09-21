import { Project } from "../../types/types"

type ProjectDetailProp = {
    project: Project
}

const ProjectDetail = ({ project }: ProjectDetailProp) => {
    return (
        <div className='fixed z-50 top-[50vh] left-1/4 bg-green-500'>
{project.name}            
        </div>
    )
}

export default ProjectDetail
