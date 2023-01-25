import { useParams } from "react-router-dom"
import { ProfileInfo } from "../components/ProfileInfo"
import { useContext, useEffect, useState } from "react"
import { FavouritesContext } from "../context/FavouritesContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const FriendDeatailPage = () => {

    const { favouriteIds, toggleFavourite } = useContext(FavouritesContext);
    const { friendId } = useParams();
    const [friend, setFriend] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const isFavourite = friend && favouriteIds.includes(friend.id);

    useEffect(() => {
        const loadFriend = async () => {
            try {
                const response = await axios.get(`/friends/${friendId}`);
                setFriend(response.data);
                setIsLoading(false);
            } catch(e) {
                console.log(e)
                setIsLoading(false)
            }
        }

        loadFriend();
    }, [friendId]);

    const navigate = useNavigate();

    const pageActions = [
        {
            name: isFavourite ? 'Remove From Favourites' : 'Add to Favourites',
            handler: () => toggleFavourite(friendId)
        },
        {
            name: 'Edit Friend',
            handler: () => navigate(`/edit-friend/${friendId}`)
        }
    ]

    if (isLoading) {
        return <p>Loading...</p>
    }

    return friend ? (
        <>
            <ProfileInfo
                userInformation={friend}
                actions={pageActions}
            />
            {isFavourite ? <b>She fav</b> : ""}
        </>
    )
        : (<h1>404</h1>);

}

export { FriendDeatailPage }