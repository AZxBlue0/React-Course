import styles from './WelcomeMessage.module.css'
import { PropTypes } from 'prop-types'
import { useState } from 'react'

const WelcomeMessage = ({ name }) => {
    const [isVisible, setIsVisible] = useState(true)



    return isVisible ? (
        <div className={styles.welcomeMessage}>
            <h2 >Welcome to the Fren tracker smacker, {name}</h2>
            <button onClick={(() => setIsVisible(false))}>Hide Welcome Message</button>
        </div>
    ) : null;
}

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
}
export { WelcomeMessage }