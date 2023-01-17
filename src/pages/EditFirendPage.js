import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FriendsContext } from "../context/FriendsContext";
import { PersonInfoForm } from "../components/PersonInfoForm";

const EditFriendPage = () => {
    const { friendId } = useParams();
    const { friends } = useContext(FriendsContext);
    const { updateFriend } = useContext(FriendsContext);
    const navigate = useNavigate();
    const selectedFriend = friends.find(f => f.id === friendId);

    const saveUpdatedInformation = updatedInfo => {
        updateFriend(
            { ...updatedInfo, id: friendId }
        );
        navigate('/');
    }

    return (
        <>
            <h1>Edit friend</h1>
            <PersonInfoForm
                person={selectedFriend}
                onSubmit={saveUpdatedInformation}
                buttonText="Save Changes"
            />
        </>
    )
}

export { EditFriendPage }