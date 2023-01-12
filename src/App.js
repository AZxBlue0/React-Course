import './App.css';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { myProfileData, friendsData} from './data';
export function App() {
  return (
    <>
      <h1>Friends tracker</h1>
      <div className="content-container">
        <WelcomeMessage name="SHOOOOOWN" />
        <ProfileInfo userInformation={myProfileData} />
        <ProfileInfo userInformation={friendsData[0]} />
        <ProfileInfo userInformation={friendsData[1]} />
        <ProfileInfo userInformation={friendsData[2]} />
      </div>
    </>
  )
}
