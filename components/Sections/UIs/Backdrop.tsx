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
            className={`${isVisible ? '' : 'invisible'} z-40 absolute top-0 left-0 w-full h-full bg-black/30`}
            onClick={() => click()}
        >
        </div>
    )
}

export default Backdrop
