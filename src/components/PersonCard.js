import styles from './PersonCard.module.css';
import { PropTypes } from 'prop-types';

const PersonCard = ({
    person: {
        id,
        profilePicUrl,
        name,
        age
    },
    onCardClicked,
    onAction = () => { },
    actionName
}) => {


    return (
        <>
            <div
                onClick={() => onCardClicked(id)}
                className={styles.card}>
                <div className={styles.profilePicLeft}>
                    <img
                        className={styles.profilePic}
                        src={profilePicUrl}
                        alt={`${name}`}
                    />
                </div>
                <div className={styles.cardDetails}>
                    <h2>Name</h2>
                    <p>{name}</p>
                    <h2>Age</h2>
                    <p>{age}</p>
                </div>
                {actionName && onAction ? <button onClick={(e) => {
                    onAction(id);
                    e.stopPropagation();
                }}
                    className={styles.actionButton}>
                    {actionName}
                </button> : ''}
            </div>
        </>
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