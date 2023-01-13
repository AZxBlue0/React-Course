import styles from './App.module.css';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { myProfileData, friendsData } from './data';
import { PeopleList } from './PeopleList';
import { useState } from 'react';

export function App() {

  const [favouriteIds, setFavouriteIds] = useState([]);

  const favourites = favouriteIds.map(id =>
    friendsData.find(friend => friend.id === id));

  const nonFavourites = friendsData.filter(
    friend => !favouriteIds.find(id => friend.id === id));

  const toggleFavourite = personid => {
    if (favouriteIds.includes(personid)) {
      setFavouriteIds(favouriteIds.filter(id => id !== personid));
    } else {
      setFavouriteIds(favouriteIds.concat(personid));
    }
  }

  return (
    <>
      <h1>Friends tracker</h1>
      <div className={styles.contentContainer}>
        <WelcomeMessage name={myProfileData.name} />
        <ProfileInfo userInformation={myProfileData} />
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
      </div >
    </>
  )
}
