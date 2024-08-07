import { ReactNode, useState, useEffect } from "react"

type AccordionPropType = {
    name: string,
    activeAccordion: string,
    setActive: Function,
    children: ReactNode
}

const Accordion = ({ name, activeAccordion, setActive, children }: AccordionPropType) => {

    const isActive: boolean = (name == activeAccordion)

    const [visible, setVisible] = useState(isActive)

    useEffect(() => {
        setVisible(isActive)
    }, [isActive])

    const handleClick = () => {
        setVisible(prevState => !prevState)
        setActive(name)
    }

    // let headingstyle = visible ? 'bg-blue-400 text-white' : 'bg-gray-300 text-gray-700'
    let headingstyle = true ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'


    return (
        <div className='mt-5'>
            <div
                className={`${headingstyle} transition-colors duration-500 rounded px-6 py-3 flex justify-between cursor-pointer`}
                onClick={() => handleClick()}
            >
                <div className='uppercase text-sm md:text-md tracking-wider'>
                    {name}
                </div>

                {/* <p className='text-xl'>
                    {visible ? '-' : '+'}
                </p> */}
            </div>
            {/* <div className={`${visible ? 'opacity-100 h-auto py-3 ' : 'opacity-0 h-px py-0 '} transition-all overflow-hidden duration-500 w-full bg-white text-gray-600 px-6  border border-gray-400 rounded mt-1 text-sm md:text-base`}>
                {children}
            </div> */}

            <div className={`opacity-100 h-auto py-3  transition-all overflow-hidden duration-500 w-full bg-white text-gray-600 px-6  border border-gray-400 rounded mt-1 text-sm md:text-base`}>
                {children}
            </div>
        </div>
    )
}

export default Accordion
