import Image from "next/image"

const Carousel = ({ image }: { image: string }) => {
    return (
        <div className='w-full h-[50vh] relative'>
            <Image src={image} fill={true} alt='certificate image' className='object-contain' />
        </div>
    )
}

export default Carousel
