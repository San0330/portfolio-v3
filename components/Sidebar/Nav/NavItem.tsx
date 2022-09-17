import Style from './NavItem.module.css'

type NavItemProp = {
    link: string,
    title: string,
    active?: boolean
}

const NavItem = ({ link, title, active = false }: NavItemProp) => {
    return (
        <li className={`${Style.navLink} ${active ? Style.active : ''}`} >
            <a href="#" data-nav-section={link}>
                {title}
            </a>
        </li>
    )
}

export default NavItem
