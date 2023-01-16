import styles from './WelcomeMessage.module.css'
import { PropTypes } from 'prop-types'
import { useState } from 'react'

const WelcomeMessage = ({ name }) => {
    const hasBeenHidden = localStorage.getItem('welcomeMessageHidden');

    const [isVisible, setIsVisible] = useState(!hasBeenHidden)

    const hide = () => {
        localStorage.setItem('welcomeMessageHidden', true);
        setIsVisible(false);
    }
    
    return isVisible ? (
        <div className={styles.welcomeMessage}>
            <h2 >Welcome to the Fren tracker smacker, {name}</h2>
            <button onClick={hide}>Hide Welcome Message</button>
        </div>
    ) : null;
}

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
}
export { WelcomeMessage }