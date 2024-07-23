"use client"

import Sections from "./components/Sections";
import Sidebar from "./components/Sidebar";
import { useState, createContext } from "react"

import Style from './AppComponent.module.css'
import { Project } from "./types/types";
import Backdrop from "./components/Sections/UIs/Backdrop";
import ProjectPopup from "./components/Sections/ProjectPopup";

type DrawerState = 'open' | 'close'

export const SelectProjectContext = createContext<Function | null>(null)
export const DrawerStateContext = createContext<Function | null>(null)

export default function AppComponent() {

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
          <DrawerStateContext.Provider value={toggleDrawer}>
              <Backdrop show={selectedProject != null} click={() => setSelectedProject(null)} />              
                
              <ProjectPopup project={selectedProject} click={() => setSelectedProject(null)} />

              <HamburgerButton drawerState={drawerState} toggleDrawer={toggleDrawer} />

              <div className={`${containerStyle}`} >
                  <Sidebar />
                  <Sections />
              </div>
          </DrawerStateContext.Provider>
      </SelectProjectContext.Provider >
  )
}

const HamburgerButton = ({ drawerState, toggleDrawer }: { drawerState: DrawerState, toggleDrawer: Function }) => {
    let hamburgerStyle = Style.Hamburger;

    if (drawerState == 'open') {
        hamburgerStyle += ` ${Style.Opened}`
    }

    return (
        <button className={`${hamburgerStyle} block md:hidden fixed top-5 left-5 z-50`} onClick={() => toggleDrawer()} >
            <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
            <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
            <div className="h-[2px] w-6 mb-1 bg-gray-400"></div>
        </button>
    )
}
