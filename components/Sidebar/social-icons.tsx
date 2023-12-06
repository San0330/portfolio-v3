import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import Style from './social-icons.module.css'

const SocialIcons = () => {
    const linkedInLink = 'https://www.linkedin.com/in/santosh-neupane-0330/'
    const githubLink = 'https://github.com/San0330'
    const mail = 'me@santosh-neupane.com.np'
    const linkedFollowLink = 'https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=santosh-neupane-0330'

    const openMail = () => window.open(`mailto:${mail}`)

    return (
        <div>
            <a className={`flex mx-auto ${Style.libutton}`} href={linkedFollowLink} rel="noreferrer noopener" target="_blank">Follow</a>
            <div className="flex justify-around items-end w-full my-4">
                <div
                    className={`relative cursor-pointer ${Style.mailIcon}`}
                    onClick={openMail}
                >
                    <AiOutlineMail size={25} color="gray" />
                    <div
                        className={`bg-black/50 text-sm z-20 text-white text-md rounded-md px-4 py-2 top-8 -left-8 absolute whitespace-nowrap ${Style.tooltip}`}
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
                        <AiFillGithub size={25} color='gray' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialIcons
