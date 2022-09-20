import Style from './NavItem.module.css'
import * as Scroll from 'react-scroll'

type NavItemProp = {
    link: string,
    title: string,
}

const NavItem = ({ link, title }: NavItemProp) => {
    return (
        <li className={`${Style.navLink} cursor-pointer`} >
            <Scroll.Link to={link} activeClass={Style.active} spy={true} smooth={true}>
                {title}
            </Scroll.Link>
        </li>
    )
}

export default NavItem
