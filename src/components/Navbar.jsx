import { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
const Navbar = () => {
    const [isSideBarStatus, setSideStatus] = useState(false);

    const toggleSideBar = () => {
        setSideStatus(!isSideBarStatus);
    }
    return (
        <>
            <div className={isSideBarStatus ? styles.showMobileSideBar : styles.hideMobileSideBar}
            >
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/login" className={`btn__primary ${styles.login__btn}`}>Login</Link>
                <Link to="/signup" className="btn__primary">Get Started</Link>
            </div>
            <nav id={styles.mobileNavBar}>
                <div className={styles.left}>
                    <Link to="/">Money Manager</Link>
                </div>
                <button
                    onClick={toggleSideBar}
                    className={`flex ${styles.toggle__btn}`}
                >
                    <Icon icon="mdi:hamburger-open"></Icon>
                </button>

            </nav>
            <nav id={styles.desktopNavBar}>
                <div className={styles.left}>
                    <Link to="/">Money Manager</Link>
                </div>
                <div className={styles.center}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
                <div className={styles.right}>
                    <Link to="/login" className={`btn__primary ${styles.login__btn}`}>Login</Link>
                    <Link to="/signup" className="btn__primary">Get Started</Link>
                </div>
            </nav>
        </ >
    )
}

export default Navbar