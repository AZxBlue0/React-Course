import { PeopleList } from '../components/PeopleList';
import { useNavigate } from 'react-router-dom'
import styles from './FriendsPage.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/favorites';
import { getFavorites } from '../selectors/favorites';

const FriendsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const favourites = useSelector(state => getFavorites(state));

    const nonFavourites = useSelector(state => state.friends.filter(friend =>
        !state.favorites.find(id => friend.id === id)));

    useEffect(() => {
        console.log('Friends Page Effect function called');
    });


    const goToPersonDetail = personId => {
        navigate(`/friends/${personId}`);
    }

    return (
        <>
            <div className={styles.contentHeading}> My frens </div>
            <p>You have {favourites.length} {favourites.length === 1 ? 'friend' : 'friends'}</p>
            <h2 className={styles.contentHeading}>Favourites</h2>
            <PeopleList
                people={favourites}
                onClickPerson={goToPersonDetail}
                onPersonAction={id => dispatch(removeFavorite(id))}
                actionName='Remove from favorites'
            />
            <h2 className={styles.contentHeading}>Frens</h2>
            <PeopleList
                people={nonFavourites}
                onClickPerson={goToPersonDetail}
                onPersonAction={id => dispatch(addFavorite(id))}
                actionName='Add to favorites'
                allowAdditions
            />
        </>
    )
}

export { FriendsPage }