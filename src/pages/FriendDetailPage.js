import { useParams } from "react-router-dom"
import { friendsData } from "../data"
import { ProfileInfo } from "../components/ProfileInfo"


const FriendDeatailPage = ({
    favouriteIds = [],
    onTogggleFavourite
}
) => {
    const { friendId } = useParams();

    const isFavourite = favouriteIds.includes(friendId);

    const selectedFriend = friendsData.find(friend => friend.id === friendId);

    return selectedFriend ? (
        <ProfileInfo
            userInformation={selectedFriend}
            onToggleFavourite={() => onTogggleFavourite(friendId)}
        />
    )
        : (<h1>404</h1>);

}

export { FriendDeatailPage }