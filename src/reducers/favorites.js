import {
    ADD_FAVOURITE,
    REMOVE_FAVORITE
} from '../actions/favorites';

export const favoritesReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_FAVOURITE: {
            const {friendId} = payload;
            return [...state, friendId];
        }

        case REMOVE_FAVORITE: {
            const {friendId} = payload;
            return state.filter(id => id !== friendId);
        }

        default: {
            return state;
        }
    }
}