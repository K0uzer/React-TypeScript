import Logo from './Logo'

const Header = ({ children }: { children: any }) => {
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    )
}

export default Header
