import { AiFillGithub, AiOutlineEye, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Section from "./Section";
import { Heading1, Heading2 } from "./UIs/Headings";
import { projects, projectCategories } from '../../data/projects'
import { Category, Project } from '../../types/types'
import { useContext, useEffect, useState } from "react";
import { SelectProjectContext } from "../AppComponent";
import Image from "next/image";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('featured')

    return (
        <Section name='projects'>
            <Heading1 title="Demo / Hobby Projects" />
            <Heading2 title='Projects' />
            <CategoryLists selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <ProjectLists category={selectedCategory} />
        </Section>
    )
}

type CategoryListsProps = {
    selectedCategory: Category,
    setSelectedCategory: Function,
}

const CategoryLists = ({ selectedCategory, setSelectedCategory }: CategoryListsProps) => {
    return (
        <div className='flex gap-5 mb-5'>
            {
                projectCategories.map((category, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`${selectedCategory == category ? 'text-blue-400 border-b border-blue-400' : ''} cursor-pointer uppercase tracking-wider select-none`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </div>
                    )
                })
            }
        </div>
    )
}

const ProjectLists = ({ category }: { category: Category }) => {

    const setSelectedProject = useContext(SelectProjectContext)

    const filteredProjects = projects.filter(
        (project) => project.category.includes(category)
    )

    const [page, setPage] = useState(1)
    const total = filteredProjects.length
    const limit = 4

    let totalNumberOfPages = Math.ceil(total / limit)
    let showPagination = limit < total

    useEffect(() => {
        setPage(1)
    }, [category])

    const scrollToProjectSection = () => {
        let projectDiv = document.getElementById('projects')

        if (!projectDiv) return;

        const pos =
            projectDiv.getBoundingClientRect().top +
            window.scrollY +
            projectDiv.ownerDocument.documentElement.clientTop

        window.scrollTo({
            top: pos,
            behavior: 'smooth',
        })

    }

    const incrementPage = () => {
        setPage(page + 1)
        scrollToProjectSection()
    }

    const decrementPage = () => {
        setPage(page - 1)
        scrollToProjectSection()
    }

    let start = Math.max(0, (page - 1) * limit)
    let end = Math.min(start + page * limit, total)

    let projectsToShow: Project[] = []
    for (let idx = start; idx < end; idx++) {
        projectsToShow.push(filteredProjects[idx])
    }

    return (
        <div>
            {showPagination && (
                <div className="mb-5 text-gray-500">
                    {`Page ${page} of ${totalNumberOfPages}`}
                </div>
            )}
            <div className='grid grid-cols-2 gap-8'>
                {
                    projectsToShow.map((project, idx) =>
                        <ProjectBox key={idx} project={project} click={() => setSelectedProject?.(project)} />
                    )
                }
            </div>
            {showPagination && (
                <PaginationLink
                    disablePrev={start <= 0}
                    disableNext={end >= total}
                    page={page}
                    incrementPage={incrementPage}
                    decrementPage={decrementPage}
                />
            )}
        </div>
    )

}

type PaginationLinkProps = {
    disablePrev: boolean,
    disableNext: boolean,
    page: number,
    incrementPage: Function,
    decrementPage: Function,
}

const PaginationLink = ({
    disablePrev,
    disableNext,
    page,
    incrementPage,
    decrementPage,
}: PaginationLinkProps) => {
    return (
        <div className="flex justify-center items-center mt-6">
            <div
                className={`px-5 py-2 ${disablePrev ? '' : 'cursor-pointer'}`}
                onClick={() => { !disablePrev && decrementPage() }}
            >
                <AiOutlineArrowLeft
                    size={26}
                    color={disablePrev ? 'gray' : 'blue'}
                    title={'previous page'}
                />
            </div>
            <div className="font-semibold text-blue-500">{page}</div>
            <div
                className={`px-5 py-2 ${disableNext ? '' : 'cursor-pointer'}`}
                onClick={() => { !disableNext && incrementPage() }}
            >
                <AiOutlineArrowRight
                    size={26}
                    color={disableNext ? 'gray' : 'blue'}
                    title={'next page'}
                />
            </div>
        </div>
    )
}

type ProjectBoxProp = {
    project: Project,
    click: Function
}

const ProjectBox = ({ project, click }: ProjectBoxProp) => {
    return (
        <div className="relative w-96 h-72 border border-gray-300 shadow-lg overflow-hidden rounded-md group">

            <Image
                src={`/images/projects/${project.image}`}
                layout='fill'
                alt={`${project.name} image`}
                className='absolute h-full w-full object-cover' />

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
                        <button
                            className='border px-3 py-1 rounded bg-white text-blue-500 flex flex-row gap-3 items-center'
                            onClick={() => click()}
                        >
                            <AiOutlineEye />
                            Detail
                        </button>
                        <button
                            className='border px-3 py-1 rounded flex flex-row gap-3 items-center'
                            onClick={() => { window.open(project.github_url, "_blank") }}
                        >
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
