import { useState } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

const FavouritesProvider = ({ children }) => {
    const existingState = JSON.parse(localStorage.getItem('favouriteIds'));

    const [favouriteIds, setFavouriteIds] = useState(existingState || []);

    const toggleFavourite = personid => {
        let newFavouriteIds = favouriteIds.includes(personid)
            ? favouriteIds.filter(id => id !== personid)
            : favouriteIds.concat(personid);

        setFavouriteIds(newFavouriteIds);
        localStorage.setItem('favouriteIds', JSON.stringify(newFavouriteIds));
    }

    return (
        <FavouritesContext.Provider value={{ favouriteIds, toggleFavourite }}>
            {children}
        </FavouritesContext.Provider>
    )
}

export { FavouritesProvider }