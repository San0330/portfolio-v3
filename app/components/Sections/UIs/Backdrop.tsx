type BackdropProp = {
    show?: boolean,
    click: Function
}

const Backdrop = ({ show = false, click }: BackdropProp) => {  

    return (
        <div
            className={`${show ? 'opacity-100 h-full w-full ' : 'opacity-0 h-0 w-0 '} transition-all duration-200 z-40 fixed inset-0 bg-black/30`}
            onClick={() => click()}
        >
        </div>
    )
}

export default Backdrop
