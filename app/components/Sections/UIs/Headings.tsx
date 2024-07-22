type HeadingProps = {
    title: string
}

export const Heading1 = ({ title }: HeadingProps) =>
    <div className="text-sm text-gray-400 tracking-[5px] uppercase mb-8">
        {title}
    </div>

export const Heading2 = ({ title }: HeadingProps) =>
    <div className="font-bold text-gray-800 tracking-[5px] uppercase mb-10">
        {title}
    </div>

