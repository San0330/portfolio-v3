import { ReactNode } from "react"

type IntroParagraphProps = {
    children: ReactNode
}

const IntroParagraph = (props: IntroParagraphProps) => {
    return (
        <p className="font-light mb-4 leading-7 text-justify max-w-prose">
            {props.children}
        </p>
    )
}

export default IntroParagraph
