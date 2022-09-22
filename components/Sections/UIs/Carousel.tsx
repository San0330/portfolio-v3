import Image from "next/image"

const Carousel = ({ image }: { image: string }) => {
    return (
        <div className=' w-full h-[50vh]'>
            <Image src={image} layout='fill' alt='certificate image' className='object-contain' />
        </div>
    )
}

export default Carousel
