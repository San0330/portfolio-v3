import Image from "next/image"

function Intro() {
    return (
        <div className='flex flex-row md:flex-col px-8 items-center gap-x-5 mb-6'>
            <div className="w-16 h-16 md:w-36 md:h-36 relative overflow-hidden ring-1 hover:ring-2 ring-gray-300 md:mb-5 rounded-full border-5 border-red-500 md:mx-auto">
                <Image
                    src="/images/me2.jpeg"
                    layout="fill"
                    alt='Santosh Neupane Image'
                    className='absolute object-fill aspect-square' />
            </div>
            <div className="md:text-center">
                <h1 className='font-bold text-base md:text-xl tracking-wide'>
                    <a href="#">
                        Santosh Neupane
                    </a>
                </h1>
                <span className="position text-sm md:text-base text-gray-600">
                    <a href="#">
                        Software Engineer
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Intro
