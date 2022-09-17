import { ReactNode } from "react"

type SectionProp = {
    children: ReactNode
}

const Section = (props: SectionProp) => {
    return (
        <div className="pt-16 pb-36 px-10 w-full">
                {props.children}
        </div>
    )
}

export default Section
