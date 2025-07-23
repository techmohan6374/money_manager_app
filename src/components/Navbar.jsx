import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
const Navbar = () => {
    return (
        <nav>
            <div className={styles.left}>
                Money Manager
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
        </nav >
    )
}

export default Navbar