import { useParams } from "react-router-dom"
import { ProfileInfo } from "../components/ProfileInfo"
import { useContext } from "react"
import { FavouritesContext } from "../context/FavouritesContext"
import { FriendsContext } from "../context/FriendsContext"

const FriendDeatailPage = () => {

    const { favouriteIds, toggleFavourite } = useContext(FavouritesContext);
    const { friends } = useContext(FriendsContext);
    const { friendId } = useParams();

    const isFavourite = favouriteIds.includes(friendId);

    const selectedFriend = friends.find(friend => friend.id === friendId);

    return selectedFriend ? (
        <>
            <ProfileInfo
                userInformation={selectedFriend}
                onToggleFavourite={() => toggleFavourite(friendId)}
            />
            {isFavourite ? <b>She fav</b> : ""}
        </>
    )
        : (<h1>404</h1>);

}

export { FriendDeatailPage }