import Intro from "./Intro"
import Nav from "./Nav"
import SocialIcons from "./social-icons"

function Sidebar() {
    return (
        <aside className="pt-16 fixed overflow-y-scroll bg-gray-100 h-screen w-72">
            <Intro />
            <SocialIcons />
            <hr className='border-t border-gray-300 my-5' />
            <Nav />
        </aside>
    )
}

export default Sidebar
