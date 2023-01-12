import './ProfileInfo.css'
import { PropTypes } from 'prop-types'

function ProfileInfo(props) {
    const { profilePicUrl,
        name,
        age,
        bio,
        intrests } = props.userInformation;
    return (
        <>
            <div className='profile-pic-container'>
                <img
                    src={profilePicUrl}
                    alt={`${name} smiling`}
                    className='profile-pic-image'
                ></img>
            </div>
            <h2 className="content-heading">
                My Profile
            </h2>
            <h3>Name</h3>
            <p>{name}</p>
            <h3>Age</h3>
            <p>{age}</p>
            <h3>Bio</h3>
            <p>{bio}</p>
            <h3>Intrests</h3>
            <p>{intrests.join(', ')}</p>
            <ul>
                <li>Programming</li>
            </ul>
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