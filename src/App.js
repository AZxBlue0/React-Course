import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FriendDeatailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NavBar } from './components/NavBar';
import { useState } from 'react';

export function App() {
  const existingState = JSON.parse(localStorage.getItem('favouriteIds'));

  const [favouriteIds, setFavouriteIds] = useState(existingState || []);

  const toggleFavourite = personid => {
    let newFavouriteIds = favouriteIds.includes(personid)
      ? favouriteIds.filter(id => id !== personid)
      : favouriteIds.concat(personid);

    setFavouriteIds(newFavouriteIds);
    localStorage.setItem('favouriteIds', JSON.stringify(newFavouriteIds));
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className={styles.contentContainer}>
        <Routes>
          <Route path="/" element={<FriendsPage
            favouriteIds={favouriteIds}
            onToggleFavourite={toggleFavourite}
          />} />
          <Route path="/friends/:friendId" element={<FriendDeatailPage
            favouriteIds={favouriteIds}
            onTogggleFavourite={toggleFavourite}
          />} />
          <Route path="/user-profile" element={< UserProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}