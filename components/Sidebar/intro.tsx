import Image from "next/image"

function Intro() {
    return (
        <>
            <div className="w-36 h-36 relative overflow-hidden ring-1 ring-gray-300 mb-5 rounded-full border-5 border-red-500 bg-[#fce2d0] mx-auto">
                <Image
                    src="/images/me.jpg"
                    layout="fill"
                    alt='Santosh Neupane Image'
                    className='absolute object-contain' />
            </div>
            <div className="text-center">
                <h1 className='font-bold text-xl tracking-wide'><a href="#">Santosh Neupane</a></h1>
                <span className="position"><a href="#">Software Engineer</a></span>
            </div>
        </>
    )
}

export default Intro
