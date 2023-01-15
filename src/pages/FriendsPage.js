
import { friendsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { useNavigate } from 'react-router-dom'
import styles from './FriendsPage.module.css'

const FriendsPage = ({
    favouriteIds,
    onToggleFavourite = () => { }
}) => {

    const favourites = favouriteIds.map(id =>
        friendsData.find(friend => friend.id === id));

    const nonFavourites = friendsData.filter(
        friend => !favouriteIds.find(id => friend.id === id));


    const navigate = useNavigate();

    const goToPersonDetail = personId => {
        navigate(`/friends/${personId}`);
    }

    return (
        <>
            <div className={styles.contentHeading}> My frens </div>
            <p>You have {favouriteIds.length} {favouriteIds.length === 1 ? 'friend' : 'friends'}</p>
            <h2 className={styles.contentHeading}>Favourites</h2>
            <PeopleList
                people={favourites}
                onClickPerson={goToPersonDetail}
                onPersonAction={onToggleFavourite}
                actionName='Remove from favorites'
            />
            <h2 className={styles.contentHeading}>Frens</h2>
            <PeopleList
                people={nonFavourites}
                onClickPerson={goToPersonDetail}
                onPersonAction={onToggleFavourite}
                actionName='Add to favorites'
            />
        </>
    )
}

export { FriendsPage }