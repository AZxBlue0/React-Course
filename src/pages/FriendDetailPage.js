import { useParams } from "react-router-dom"
import { ProfileInfo } from "../components/ProfileInfo"
import { useContext } from "react"
import { FavouritesContext } from "../context/FavouritesContext"
import { FriendsContext } from "../context/FriendsContext"
import { useNavigate } from "react-router-dom"

const FriendDeatailPage = () => {

    const { favouriteIds, toggleFavourite } = useContext(FavouritesContext);
    const { friends } = useContext(FriendsContext);
    const { friendId } = useParams();
    const navigate = useNavigate();
    const isFavourite = favouriteIds.includes(friendId);

    const selectedFriend = friends.find(friend => friend.id === friendId);

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

    return selectedFriend ? (
        <>
            <ProfileInfo
                userInformation={selectedFriend}
                actions={pageActions}
            />
            {isFavourite ? <b>She fav</b> : ""}
        </>
    )
        : (<h1>404</h1>);

}

export { FriendDeatailPage }