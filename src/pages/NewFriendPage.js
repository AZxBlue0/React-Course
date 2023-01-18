import { PersonInfoForm } from "../components/PersonInfoForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid"
import { addFriend } from "../actions/friends";

const NewFriendPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid()
        }
        dispatch(addFriend(newFriend));
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