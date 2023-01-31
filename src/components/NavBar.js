import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = ({ isLoggedIn }) => {
    return (
        <nav className={styles.navBar}>
            <Link to="/">
                <h1 className={styles.siteHeading}>BRANDING</h1>
            </Link>
            {isLoggedIn ? (<Link to="/user-profile">
                <button className={styles.profileButton}>My Profile</button>
            </Link>) :
                <div>
                    <Link to="/signUp">
                        <button className={styles.profileButton}>Sign Up</button>
                    </Link>
                    <Link to="/LogIn">
                        <button className={styles.profileButton}>Log In</button>
                    </Link>
                </div>
            }
        </nav>
    )
}

export { NavBar };