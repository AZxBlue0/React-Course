import { useState } from 'react';
import { myProfileData as startingInfo } from '../data';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { ProfileInfo } from '../components/ProfileInfo';
import { PersonInfoForm } from '../components/PersonInfoForm';

const UserProfilePage = () => {
    const existingInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState(existingInfo || startingInfo);

    const updateUserInfo = updatedInfo => {
        setUserInfo(updatedInfo);
        localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
        setIsEditing(false);
    }

    const actions = [{
        name: 'Edit my info',
        handler: () => setIsEditing(true),
    }];

    return (
        <>
            <WelcomeMessage name={userInfo.name} />
            {
                isEditing
                    ? <PersonInfoForm person={userInfo} onSubmit={updateUserInfo} buttonText='Save changes' />
                    : <ProfileInfo userInformation={userInfo} actions={actions} />

            }
        </>
    )
};

export { UserProfilePage }