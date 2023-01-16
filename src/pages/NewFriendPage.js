import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./NewFriendPage.module.css"
import { v4 as UUID } from 'uuid'
import { FriendsContext } from "../context/FriendsContext"


const NewFriendPage = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicUrl, setProfilePicUlr] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [intrests, setIntrests] = useState('');

    const navigate = useNavigate();

    const { addFriend } = useContext(FriendsContext);

    const onCreateClick = () => {
        const newFriend = {
            name: name,
            age: age,
            profilePicUrl: profilePicUrl,
            bio: bio,
            birthDate: birthDate,
            intrests: intrests.split(",").map(str => str.trim()),
            id: UUID()
        }
        addFriend(newFriend);
        navigate('/');
    }

    return (
        <>
            <h1>Add new friend</h1>
            <div className={styles.contentArea}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                ></input>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    placeholder="age"
                    type="number"
                    value={age}
                    onChange={e => setAge(Number(e.target.value))}
                ></input>
                <label htmlFor="ppurl">Profile Pic Url</label>
                <input
                    id="ppurl"
                    placeholder="Profile Pic Url"
                    type="text"
                    value={profilePicUrl}
                    onChange={e => setProfilePicUlr(e.target.value)}
                ></input>
                <label htmlFor="bio">Bio</label>
                <textarea
                    id="bio"
                    placeholder="Your Bio"
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                ></textarea>
                <label htmlFor="birthDate">Birth Date</label>
                <input
                    type="date"
                    id="birthDate"
                    onChange={e => setBirthDate(e.target.value)}
                    value={birthDate}
                >
                </input>
                <label htmlFor="intrests">Intrests</label>
                <input
                    id="Intersts"
                    placeholder="Intrest, intrest, etc."
                    type="text"
                    value={intrests}
                    onChange={e => setIntrests(e.target.value)}
                ></input>
                <button onClick={onCreateClick}> Create </button>
            </div>
        </>)
}

export { NewFriendPage }