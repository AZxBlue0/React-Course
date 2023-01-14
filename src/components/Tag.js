import styles from './Tag.module.css'
import PropTypes from 'prop-types'

const Tag = ({ text }) => {
    return (
        <div className={styles.tag}>
            {text}
        </div>
    )
};

Tag.propTypes = {
    text: PropTypes.string.isRequired
};

export {Tag};