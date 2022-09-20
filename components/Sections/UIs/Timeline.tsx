import { ReactNode } from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi'
import Style from './Timeline.module.css'

type TimelineProps = {
    title: string,
    subTitle: string,
    color: string,
    dateRange: string,
    children: ReactNode
}

const Timeline = ({ title, subTitle, color, dateRange, children }: TimelineProps) => {
    return (
        <div className="flex flex-row gap-x-10 min-w-11/12">
            <div className={`${color} text-white h-10 w-10 shadow-lg rounded-full flex justify-center items-center z-20 leading-10`}>
                <HiOutlineBriefcase />
            </div>
            <div className={`relative flex flex-col gap-y-5 bg-gray-100 border shadow-lg text-gray-800 px-3 py-5 pb-10 rounded ${Style.Detail}`}>
                <div>
                    <h1 className='text-2xl text-gray-700 capitalize'>
                        {title}
                    </h1>
                    <p className='text-gray-500'>{subTitle}<span className='ml-2'> ( {dateRange} )</span></p>
                </div>

                {children}

            </div>

        </div>
    )
}

export default Timeline
