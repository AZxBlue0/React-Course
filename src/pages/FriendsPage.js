
import { friendsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { useState } from 'react';
import styles from './FriendsPage.module.css'

const FriendsPage = () => {

    const existingState = JSON.parse(localStorage.getItem('favouriteIds'));

    const [favouriteIds, setFavouriteIds] = useState(existingState || []);

    const favourites = favouriteIds.map(id =>
        friendsData.find(friend => friend.id === id));

    const nonFavourites = friendsData.filter(
        friend => !favouriteIds.find(id => friend.id === id));

    const toggleFavourite = personid => {
        let newFavouriteIds = favouriteIds.includes(personid)
            ? favouriteIds.filter(id => id !== personid)
            : favouriteIds.concat(personid);

        setFavouriteIds(newFavouriteIds);
        localStorage.setItem('favouriteIds', JSON.stringify(newFavouriteIds));
    }

    return (
        <>
            <div className={styles.contentHeading}> My frens </div>
            <p>You have {favouriteIds.length} {favouriteIds.length === 1 ? 'friend' : 'friends'}</p>
            <h2 className={styles.contentHeading}>Favourites</h2>
            <PeopleList
                people={favourites}
                onClickPerson={toggleFavourite}
            />
            <h2 className={styles.contentHeading}>Frens</h2>
            <PeopleList
                people={nonFavourites}
                onClickPerson={toggleFavourite}
            />
        </>
    )
}

export { FriendsPage }