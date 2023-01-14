import styles from './App.module.css';
// 
// 
// 
// 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FriendDeatailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NavBar } from './components/NavBar';


export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className={styles.contentContainer}>
        <Routes>
          <Route path="/" element={<FriendsPage />} />
          <Route path="/friends/:friendId" element={<FriendDeatailPage />} />
          <Route path="/user-profile" element={< UserProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}