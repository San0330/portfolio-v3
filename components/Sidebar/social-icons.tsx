import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import Style from './social-icons.module.css'

const SocialIcons = () => {
    const linkedInLink = 'https://www.linkedin.com/in/santosh-neupane-0330/'
    const githubLink = 'https://github.com/San0330'
    const mail = 'santosh.neupane.0330@gmail.com'

    const openMail = () => window.open(`mailto:${mail}`)

    return (
        <div className="flex justify-around items-end w-full my-2">
            <div
                className={`relative cursor-pointer ${Style.mailIcon}`}
                onClick={openMail}
            >
                <AiOutlineMail size={25} color="blue" />
                <div
                    className={`bg-black/50 text-sm z-20 text-white text-md rounded-md px-4 py-2 top-8 -left-8 absolute ${Style.tooltip}`}
                >
                    {mail}
                </div>
            </div>
            <div>
                <a
                    href={linkedInLink}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <AiFillLinkedin size={25} color="blue" />
                </a>
            </div>
            <div>
                <a
                    href={githubLink}
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <AiFillGithub size={25} />
                </a>
            </div>
        </div>
    )
}

export default SocialIcons
