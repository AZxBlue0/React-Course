//import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PersonInfoForm } from "../components/PersonInfoForm";
import { editFriend } from '../actions/friends'
import { getFriendById } from "../selectors/friends";

const EditFriendPage = () => {
    console.log('editFriendPage');
    const { friendId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedFriend = useSelector(getFriendById(friendId));

    const saveUpdatedInformation = updatedInfo => {
        dispatch(editFriend(updatedInfo, friendId));
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

// const mapStateToProps = state => ({
//     friends: getFriends(state),
// });

// const mapDispatchToProps = dispatch => ({
//     editFriend: (updatedInfo, friendId) => dispatch(editFriend( updatedInfo, friendId));
// });

// const EditFriendPageConn = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(EditFriendPage);

//if you do this you have to connect CONN component.
//We usually change EditFriendPage to EditFriendPageBase so not to use the Conn suffix

export { EditFriendPage }