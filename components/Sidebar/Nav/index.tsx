import NavItem from "./NavItem";

const Nav = () => {
    return (
        <nav role="navigation">
            <div>
                <ul className="flex flex-col items-center mt-2 gap-y-5 text-xs uppercase tracking-widest font-light">
                    <NavItem link='about' title='About' active />
                    <NavItem link='experiences' title='Experiences' />
                    <NavItem link='skills' title='Skills' />
                    <NavItem link='education' title='Education' />
                    <NavItem link='projects' title='Projects' />
                    <NavItem link='achievements' title='Achievements' />
                    <NavItem link='blogs' title='Blogs' />
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
