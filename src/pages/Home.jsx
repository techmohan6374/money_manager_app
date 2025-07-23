import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify-icon/react';

const Home = () => {
    return (
        <main>
            <div className={styles.main__form}>
                <div className={styles.main__header__name}>
                    Take Control of Your Finances
                </div>
                <div className={styles.main__header__description}>
                    Your Foundation for secure, intelligent financial management.Effortlessly track your income and expenses to achieve your financial goals.
                </div>
                <div className={styles.main__redirection}>
                    <Link to="/login" className="btn__primary">Start Tracking for Free</Link>
                    <Link to="/login" className="btn__secondary">
                        Learn More
                        <Icon icon="gravity-ui:arrow-right"></Icon>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home
