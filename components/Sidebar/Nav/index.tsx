import NavItem from "./NavItem";

const Nav = () => {
    return (
        <nav role="navigation">
            <div>
                <ul className="flex flex-col items-center mt-2 gap-y-5 text-sm uppercase tracking-widest font-light">
                    <NavItem link='about' title='About' active />
                    <NavItem link='skills' title='Skills' />
                    <NavItem link='education' title='Education' />
                    <NavItem link='experience' title='Experience' />
                    <NavItem link='work' title='Work' />
                    <NavItem link='blog' title='Blog' />
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
