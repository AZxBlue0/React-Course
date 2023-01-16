import { useState } from 'react';
import { FriendsContext } from '../context/FriendsContext';
import { friendsData as starterFriends } from '../data';

const FriendsProvider = ({ children }) => {
    const existingState = JSON.parse(localStorage.getItem('friends'));

    const [friends, setFriends] = useState(existingState || starterFriends);

    const addFriend = friend => {
        const newFriends = friends.concat(friend);
        setFriends(newFriends);
        localStorage.setItem('friends', JSON.stringify(newFriends));
    }

    return (
        <FriendsContext.Provider value={{ friends , addFriend }}>
            {children}
        </FriendsContext.Provider>
    )
}

export { FriendsProvider }