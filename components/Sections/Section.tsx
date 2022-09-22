import { ReactNode } from "react"
import { validSectionTitle } from '../../types/types'

type SectionProp = {
    children: ReactNode,
    name: validSectionTitle,
}

const Section = (props: SectionProp) => {
    return (
        <div id={props.name} className="pt-16 min-h-screen w-full">
            {props.children}
        </div>
    )
}

export default Section
