import styles from './PersonCard.module.css';
import { PropTypes } from 'prop-types';

const PersonCard = ({
    person: {
        id,
        profilePicUrl,
        name,
        age
    }, isFavourite,
    onCardClicked
}) => {


    return (
        <div
        onClick={() =>onCardClicked(id)}
        className={styles.card}>
            <div className={styles.profilePicLeft}>
                <img
                    className={styles.profilePic}
                    src = {profilePicUrl}
                    alt = {`${name}`}
                />
            </div>
            <div className={styles.cardDetails}>
                <h3>Name</h3>
                <p>{name}</p>
                <h3>Age</h3>
                <p>{age}</p>
            </div>
        </div>
    )
}

PersonCard.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number
    }).isRequired,
    onCardClicked: PropTypes.func,
};

export { PersonCard };