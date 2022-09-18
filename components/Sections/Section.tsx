import { ReactNode } from "react"

type SectionProp = {
    children: ReactNode,
    name: string,
}

const Section = (props: SectionProp) => {
    return (
        <div id={props.name} className="pt-16 px-10 min-h-screen w-full">
            {props.children}
        </div>
    )
}

export default Section
