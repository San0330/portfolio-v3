import { useState, createContext } from "react"
import { Project } from "../types/types"
import Sections from "./Sections"
import ProjectPopup from "./Sections/ProjectPopup"
import Backdrop from "./Sections/UIs/Backdrop"
import Sidebar from "./Sidebar"
import Style from './AppComponent.module.css'

export const SelectProjectContext = createContext<Function | null>(null)

type DrawerState = 'open' | 'close'

const AppComponent = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [drawerState, setDrawerState] = useState<DrawerState>('close')

    let containerStyle = Style.Container + ' '

    if (drawerState == 'close') {
        containerStyle += Style.OffCanvas;
    }

    return (
        <SelectProjectContext.Provider value={setSelectedProject}>
            <Backdrop show={selectedProject != null} click={() => setSelectedProject(null)} />
            {selectedProject && <ProjectPopup project={selectedProject} click={() => setSelectedProject(null)} />}

            <button className='block md:hidden fixed top-5 left-5 z-50' onClick={() => setDrawerState(prevState => prevState == 'open' ? 'close': 'open')}>
                <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
                <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
                <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
            </button>

            <div className={`${containerStyle}`} >
                <Sidebar />
                <Sections />
            </div>

        </SelectProjectContext.Provider>
    )
}

export default AppComponent

