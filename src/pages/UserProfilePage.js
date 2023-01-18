import { useState } from 'react';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { ProfileInfo } from '../components/ProfileInfo';
import { PersonInfoForm } from '../components/PersonInfoForm';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../actions/profile';
import { getProfileInfo } from '../selectors/profile';

const UserProfilePage = () => {
    console.log('userProfilePage Rendering');
    const userInfo = useSelector(getProfileInfo);
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const updateUserInfo = updatedInfo => {
        dispatch(updateProfile(updatedInfo));
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