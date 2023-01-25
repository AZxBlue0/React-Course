import axios from 'axios';
import { useState, useEffect } from 'react';
import { FriendsContext } from '../context/FriendsContext';

const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadFriends = async () => {
            const response = await axios.get('/friends');
            setFriends(response.data);
            setIsLoading(false);
        }
        loadFriends();
    }, [])

    const addFriend = friend => {
        // const newFriends = friends.concat(friend);
        // setFriends(newFriends);
        alert("Not implemented yet");
    }

    const removeFriend = friendId => {
        // const newFriends = friends.concat(friend);
        // setFriends(newFriends);
        alert("Not implemented yet");
    }

    const updateFriend = updatedInfo => {
        // const updatedFriends = friends.map(friend => {
        //     if (friend.id === updatedInfo.id) {
        //         return updatedInfo;
        //     }
        //     return friend;
        // })
        // setFriends(updatedFriends);
        alert('Not implemented yet');
    }

    return (
        <FriendsContext.Provider value={{ friends, addFriend, updateFriend, removeFriend, isLoading }}>
            {children}
        </FriendsContext.Provider>
    )
}

export { FriendsProvider }