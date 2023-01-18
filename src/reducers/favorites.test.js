import { favoritesReducer } from "./favorites";
import { ADD_FAVOURITE, REMOVE_FAVORITE } from "../actions/favorites";

test("Adds an id to favorites when the ADD_FAVORITE is called", () => {
    const startingState = ['2', '3']
    const fakeAction = { type: ADD_FAVOURITE, payload: { friendId: '1' } }

    const actual = favoritesReducer(startingState, fakeAction);
    const expected = ['2', '3', '1']

    expect(actual).toEqual(expected);
})


test("Removes an id from favorites when the REMOVE_FAVORITE is called", () => {
    const startingState = ['2', '3', '1']
    const fakeAction = { type: REMOVE_FAVORITE, payload: { friendId: '1' } }

    const actual = favoritesReducer(startingState, fakeAction);
    const expected = ['2', '3']

    expect(actual).toEqual(expected);
})