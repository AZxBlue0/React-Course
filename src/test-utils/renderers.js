import { render } from "@testing-library/react"
import { FavouritesContext } from "../context/FavouritesContext"
import { FriendsContext } from "../context/FriendsContext"
import { FriendsProvider } from '../components/FriendsProvider';
import { FavouritesProvider } from "../components/FavouritesProvider";

export const renderWithResources = (elements, firendsOptions, favoritesOptions, options) => {
    return render(
        <FriendsContext.Provider value={firendsOptions}>
            <FavouritesContext.Provider value={favoritesOptions}>
                {elements}
            </FavouritesContext.Provider>
        </FriendsContext.Provider>, options
    )
};

export const renderInApp = (elements, options) => {
    return render(
        <FavouritesProvider>
            <FriendsProvider>
                {elements}
            </FriendsProvider>
        </FavouritesProvider>, options
    );
}