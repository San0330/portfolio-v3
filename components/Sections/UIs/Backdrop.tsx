import { useEffect, useState } from "react"

type BackdropProp = {
    show?: boolean,
    click: Function
}

const Backdrop = ({ show = false, click }: BackdropProp) => {

    const [isVisible, setIsVisible] = useState(show)

    useEffect(() => {
        setIsVisible(show)
    }, [show])

    return (
        <div
            className={`${isVisible ? 'opacity-100 h-full w-full ' : 'opacity-0 h-0 w-0 '} transition-all duration-200 z-40 absolute inset-0 w-full h-full bg-black/30`}
            onClick={() => click()}
        >
        </div>
    )
}

export default Backdrop
