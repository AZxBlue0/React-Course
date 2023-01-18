import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PersonInfoForm } from "../components/PersonInfoForm";
import { editFriend } from '../actions/friends'
import { getFriends } from "../selectors/friends";

const EditFriendPage = () => {
    const { friendId } = useParams();

    const friends = useSelector(getFriends);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const selectedFriend = friends.find(f => f.id === friendId);

    const saveUpdatedInformation = updatedInfo => {
        dispatch(editFriend( updatedInfo, friendId));
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