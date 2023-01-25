import { useEffect, useState } from 'react';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { ProfileInfo } from '../components/ProfileInfo';
import { PersonInfoForm } from '../components/PersonInfoForm';
import axios from 'axios';

const UserProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadUserInfo = async () => {
            const response = await axios.get('/users/0');
            setUserInfo(response.data);
            setIsLoading(false);
        }

        loadUserInfo();
    }, []);

    const updateUserInfo = updatedInfo => {
        // setUserInfo(updatedInfo);
        // setIsEditing(false);
        alert('Updating user not implemented yet')
    }

    const actions = [{
        name: 'Edit my info',
        handler: () => setIsEditing(true),
    }];

    return isLoading ? <p>Loading</p> : (
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