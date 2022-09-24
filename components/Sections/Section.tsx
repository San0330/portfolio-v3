import { ReactNode, useEffect, useRef, useState } from "react"
import { validSectionTitle } from '../../types/types'

type SectionProp = {
    children: ReactNode,
    name: validSectionTitle,
}

const Section = (props: SectionProp) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [sectionEntered, setSectionEntered] = useState(false)

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            let entry = entries[0]
            setSectionEntered(entry.isIntersecting)

        }, {
            rootMargin: '0px 0px -50% 0px',
        })

        if (sectionRef.current != null) {
            observer.observe(sectionRef.current)
        }

    }, [])

    return (
        <div ref={sectionRef} id={props.name} className={`${sectionEntered ? 'opacity-100' : 'opacity-10'} transition-opacity duration-700 pt-16 min-h-screen w-full`}>
            {props.children}
        </div>
    )
}

export default Section
