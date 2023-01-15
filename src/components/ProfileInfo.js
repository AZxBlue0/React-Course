import styles from './ProfileInfo.module.css';
import { PropTypes } from 'prop-types'
import { Tag } from './Tag';

function ProfileInfo({
    userInformation: { profilePicUrl,
        name,
        age,
        bio,
        intrests },
    onToggleFavourite = () => { }
}) {

    const displaySummary = (message) => {
        alert(`${name} is ${age} years old - ${message}`);
    }
    return (
        <>
            <div className={styles.profilePicContainer}>
                <img
                    src={profilePicUrl}
                    alt={`${name} smiling`}
                    className={styles.profilePicImage}
                ></img>
            </div>
            <button onClick={() => displaySummary('Hi there')}>Display Summary</button>
            <h2 className={styles.contentHeading}>
                My Profile
            </h2>
            <h3>Name</h3>
            <p>{name}</p>
            <h3>Age</h3>
            <p>{age}</p>
            <h3>Bio</h3>
            <p>{bio}</p>
            <h3>Intrests</h3>
            {intrests.map(intrest => <Tag key={intrest} text={intrest} />)}
            <button className={styles.actionButton} onClick={onToggleFavourite}>Toggle Favourite</button>
        </>
    );
}
ProfileInfo.propTypes = {
    userInformation: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        intrests: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
}

export { ProfileInfo }