export const ADD_FRIEND = 'ADD_FRIEND'
export const addFriend = (friendInfo) => ({
    type: ADD_FRIEND,
    payload: { friendInfo },
})

export const EDIT_FRIEND = 'EDIT_FRIEND';
export const editFriend = (friendInfo, friendId) => ({
    type: EDIT_FRIEND,
    payload: { friendInfo, friendId }
})