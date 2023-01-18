import { useParams } from "react-router-dom"
import { ProfileInfo } from "../components/ProfileInfo"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { removeFavorite, addFavorite } from '../actions/favorites'
import { getFriendById } from "../selectors/friends"
import { getIsFavorite } from "../selectors/favorites"

const FriendDeatailPage = () => {
    console.log('friendPage rendering');
    const { friendId } = useParams();
    const dispatch = useDispatch();

    const toggleFavourite = friendId => {
        if (isFavourite) {
            dispatch(removeFavorite(friendId));
        } else {
            dispatch(addFavorite(friendId));
        }
    }

    const isFavourite = useSelector(state => getIsFavorite(friendId, state));
    const selectedFriend = useSelector(getFriendById(friendId));

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