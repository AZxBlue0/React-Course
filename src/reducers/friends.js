import {
    ADD_FRIEND,
    EDIT_FRIEND
} from '../actions/friends'
import { friendsData } from '../data' //initial value for friends

export const friendsReducer = (state = friendsData, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_FRIEND: {
            const { friendInfo } = payload;
            return [...friendsData, friendInfo];
        }
        case EDIT_FRIEND: {
            const { friendInfo, friendId } = payload;
            return friendsData.map(friend => {
                if (friend.id === friendId) {
                    return { ...friend, ...friendInfo };
                }else{
                    return friend;
                }
            });
        }
        default:{
            return state
        }
    }
}

