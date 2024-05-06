import styles from './Logo.module.css'

function Logo() {
    return (
        <img
            src="./image/logo.png"
            alt="WorldWise logo"
            className={styles.logo}
        />
    )
}

export default Logo
