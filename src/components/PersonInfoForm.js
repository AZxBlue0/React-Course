import { useState } from "react";
import styles from './PersonInfoForm.module.css'

const PersonInfoForm = ({ person = {}, onSubmit = {}, buttonText = 'Submit' }) => {

    const [name, setName] = useState(person.name || '');
    const [age, setAge] = useState(person.age || '');
    const [bio, setBio] = useState(person.bio || '');
    const [profilePicUrl, setProfilePicUlr] = useState(person.profilePicUrl || '');
    const [birthDate, setBirthDate] = useState(person.birthDate || '');
    const [intrests, setIntrests] = useState((person.intrests && person.intrests.join(', ')) || '');

    const onCreateClick = () => {
        const newFriend = {
            name: name,
            age: age,
            profilePicUrl: profilePicUrl,
            bio: bio,
            birthDate: birthDate,
            intrests: intrests.split(",").map(str => str.trim())
        }
        onSubmit(newFriend);
    }

    return (
        <>
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
                <button onClick={onCreateClick}> {buttonText} </button>
            </div>
        </>)
}

export { PersonInfoForm }