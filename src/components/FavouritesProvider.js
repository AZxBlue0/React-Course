import axios from "axios";
import { useState, useEffect } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

const FavouritesProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [favouriteIds, setFavouriteIds] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            const response = await axios.get('/favorites');
            setFavouriteIds(response.data);
            setIsLoading(false);
        }
        loadFavorites();
    }, []);

    const toggleFavourite = personid => {
        // let newFavouriteIds = favouriteIds.includes(personid)
        //     ? favouriteIds.filter(id => id !== personid)
        //     : favouriteIds.concat(personid);

        // setFavouriteIds(newFavouriteIds);
        alert('Not Implemented yet');
    }

    return (
        <FavouritesContext.Provider value={{ favouriteIds, toggleFavourite, isLoading }}>
            {children}
        </FavouritesContext.Provider>
    )
}

export { FavouritesProvider }