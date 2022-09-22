import { useState, createContext } from "react"
import { Project } from "../types/types"
import Sections from "./Sections"
import ProjectPopup from "./Sections/ProjectPopup"
import Backdrop from "./Sections/UIs/Backdrop"
import Sidebar from "./Sidebar"
import Style from './AppComponent.module.css'

type DrawerState = 'open' | 'close'

export const SelectProjectContext = createContext<Function | null>(null)

const AppComponent = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [drawerState, setDrawerState] = useState<DrawerState>('close')

    let containerStyle = Style.Container + ' '

    if (drawerState == 'close') {
        containerStyle += Style.OffCanvas;
    }

    const toggleDrawer = () => {
        setDrawerState(prevState => prevState == 'open' ? 'close' : 'open')
    }

    return (
        <SelectProjectContext.Provider value={setSelectedProject}>
            <Backdrop show={selectedProject != null} click={() => setSelectedProject(null)} />

            {selectedProject && <ProjectPopup project={selectedProject} click={() => setSelectedProject(null)} />}

            <div className={`${containerStyle}`} >
                <Sidebar />
                <Sections>
                    <HamburgerButton toggleDrawer={toggleDrawer} />
                </Sections>
            </div>
        </SelectProjectContext.Provider>
    )
}

const HamburgerButton = ({ toggleDrawer }: { toggleDrawer: Function }) => {
    return (
        <button className={`${Style.Hamburger} block md:hidden fixed top-5 left-5 z-50`} onClick={() => toggleDrawer()} >
            <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
            <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
            <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
        </button>
    )
}
export default AppComponent

