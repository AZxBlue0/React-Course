import { myProfileData } from '../data';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { ProfileInfo } from '../components/ProfileInfo';

const UserProfilePage = () => {
    return (
        <>
            <WelcomeMessage name={myProfileData.name} />
            <ProfileInfo userInformation={myProfileData} />
        </>
    )
};

export { UserProfilePage }