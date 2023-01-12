import './WelcomeMessage.css'
import { PropTypes } from 'prop-types'

const WelcomeMessage = ({ name }) => {
    return (
        <h2 className="welcome-message">Welcome to the Fren tracker smacker, {name}</h2>
    )
}

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
}
export {WelcomeMessage}