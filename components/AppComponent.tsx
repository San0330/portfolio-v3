import { useState, createContext, useEffect } from "react"
import { Project } from "../types/types"
import Sections from "./Sections"
import ProjectDetail from "./Sections/ProjectDetail"
import Backdrop from "./Sections/UIs/Backdrop"
import Sidebar from "./Sidebar"

export const SelectProjectContext = createContext<Function | null>(null)

const AppComponent = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (

        <SelectProjectContext.Provider value={setSelectedProject}>
            <Backdrop show={selectedProject != null} click={() => setSelectedProject(null)} />
            {selectedProject && <ProjectDetail project={selectedProject} />}
            <Sidebar />
            <Sections />
        </SelectProjectContext.Provider>
    )
}

export default AppComponent

