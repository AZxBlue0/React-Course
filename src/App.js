import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FriendDeatailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NavBar } from './components/NavBar';
import { FavouritesProvider } from './components/FavouritesProvider';
import { NewFriendPage } from './pages/NewFriendPage';
import { FriendsProvider } from './components/FriendsProvider';

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <FavouritesProvider>
        <FriendsProvider>
          <div className={styles.contentContainer}>
            <Routes>
              <Route path="/" element={<FriendsPage />} />
              <Route path="/friends/:friendId" element={<FriendDeatailPage />} />
              <Route path="/user-profile" element={< UserProfilePage />} />
              <Route path="/new-friend" element={< NewFriendPage />} />
            </Routes>
          </div>
        </FriendsProvider>
      </FavouritesProvider>
    </BrowserRouter >
  )
}