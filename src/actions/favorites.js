export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const addFavorite = (friendId) => ({
    type: ADD_FAVOURITE,
    payload: { friendId }
});

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = (friendId) => ({
    type: REMOVE_FAVORITE,
    payload: { friendId }
})


