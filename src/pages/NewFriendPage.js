import { FriendsContext } from "../context/FriendsContext"
import { PersonInfoForm } from "../components/PersonInfoForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { v4 as uuid } from "uuid"

const NewFriendPage = () => {
    const navigate = useNavigate();

    const { addFriend } = useContext(FriendsContext);

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid
        }
        addFriend(newFriend);
        navigate('/');
    }

    return (
        <>
            <h1>Add new friend</h1>
            <PersonInfoForm
                onSubmit={onFormSubmit}
                buttonText="Create Friend"
            />

        </>)
}

export { NewFriendPage }