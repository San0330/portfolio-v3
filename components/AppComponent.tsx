import { useState, createContext } from "react"
import { Project } from "../types/types"
import Sections from "./Sections"
import ProjectPopup from "./Sections/ProjectPopup"
import Backdrop from "./Sections/UIs/Backdrop"
import Sidebar from "./Sidebar"

export const SelectProjectContext = createContext<Function | null>(null)

const AppComponent = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <SelectProjectContext.Provider value={setSelectedProject}>
            <Backdrop show={selectedProject != null} click={() => setSelectedProject(null)} />
            {selectedProject && <ProjectPopup project={selectedProject} click={() => setSelectedProject(null)} />}
            <Sidebar />
            <Sections />
        </SelectProjectContext.Provider>
    )
}

export default AppComponent

