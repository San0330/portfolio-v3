import { navItemsTitles } from "../../../data/navItems";
import NavItem from "./NavItem";

const Nav = () => {
    return (
        <nav role="navigation">
            <ul className="select-none flex flex-col items-center mt-2 gap-y-5 text-xs uppercase tracking-widest font-light">
                {
                    navItemsTitles.map(title =>
                        <NavItem key={title} link={title} title={title} />
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav;
