import styles from './Sidebar.module.css'
import Logo from './Logo'
import AddNav from './AddNav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AddNav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Sidebar
