import Style from './NavItem.module.css'
import * as Scroll from 'react-scroll'
import { useContext } from 'react'
import { DrawerStateContext } from '../../../AppComponent'

type NavItemProp = {
    link: string,
    title: string,
}

const NavItem = ({ link, title }: NavItemProp) => {

    const toggleDrawer = useContext(DrawerStateContext)

    return (
        <li className={`${Style.navLink} cursor-pointer`} >
            <Scroll.Link
                to={link}
                activeClass={Style.active}
                spy={true}
                smooth={true}
                onClick={() => toggleDrawer?.()}>
                {title}
            </Scroll.Link>
        </li >
    )
}

export default NavItem
