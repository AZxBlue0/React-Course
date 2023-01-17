import { PeopleList } from '../components/PeopleList';
import { useNavigate } from 'react-router-dom'
import styles from './FriendsPage.module.css'
import { useContext } from 'react';
import { useEffect } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import { FriendsContext } from '../context/FriendsContext';

const FriendsPage = () => {
    const { favouriteIds, toggleFavourite } = useContext(FavouritesContext);
    const { friends } = useContext(FriendsContext);

    const favourites = favouriteIds.map(id =>
        friends.find(friend => friend.id === id));

    const nonFavourites = friends.filter(
        friend => !favouriteIds.find(id => friend.id === id));
    
    useEffect(() => {
        console.log('Friends Page Effect function called');
    });

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
                onPersonAction={toggleFavourite}
                actionName='Remove from favorites'
            />
            <h2 className={styles.contentHeading}>Frens</h2>
            <PeopleList
                people={nonFavourites}
                onClickPerson={goToPersonDetail}
                onPersonAction={toggleFavourite}
                actionName='Add to favorites'
                allowAdditions
            />
        </>
    )
}

export { FriendsPage }