
/**
 * @Author Sneha T
 * 
 */
import { createContext, useContext, useEffect, useState } from "react";

/**Create favourates context */
export const FavouratesContext = createContext()

export const FavouratesProvider = ({ children }) => {
    const [favourates, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favourates")) || [];
    });

    useEffect(() => {
        localStorage.setItem("favourates", JSON.stringify(favourates));
    }, [favourates]); // Fixed: Added brackets []

    const toggleFavourates = (country) => { // Renamed to match your component usage
        setFavorites((prev) =>
            prev.find((c) => c.cca3 === country.cca3)
                ? prev.filter((c) => c.cca3 !== country.cca3)
                : [...prev, country]
        );
    };

    return (
        <FavouratesContext.Provider value={{ favourates, toggleFavourates }}>
            {children}
        </FavouratesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavouratesContext);
    if (!context) {
        throw new Error("useFavorites must be used inside FavouratesProvider");
    }
    return context; // Ensure this is outside the if block
};