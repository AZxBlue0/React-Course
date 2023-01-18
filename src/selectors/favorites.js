import { getFriends, getFriendById } from "./friends";
import { createSelector } from "reselect";


export const getFavoriteIds = state => state.favorites;
export const getFavorites = createSelector(
    getFavoriteIds,
    state => id => getFriendById(id)(state),
    (favouriteIds, getFriendById) => favouriteIds.map(id => getFriendById(id)),
);

export const getIsFavorite = (id, state) => getFavoriteIds(state).includes(id);

export const getNonFavorites = createSelector(
    getFavoriteIds,
    getFriends,
    (favouriteIds, friends) => friends.filter(friend => !favouriteIds.includes(friend.id))
);