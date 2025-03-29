import { createContext, useContext, useState } from "react";

const WishlistContext = createContext(); // Renamed for clarity

// Wishlist Provider
export function WishlistProvider({ children }) {
    const [wishList, setWishList] = useState([]); // Wishlist state

    // Add to wishlist function
    const addToWishlist = (movie) => {
        setWishList([...wishList, movie]);
    };

    // Remove from wishlist function
    const removeFromWishlist = (movie) => {
        setWishList(wishList.filter((item) => item.id !== movie.id));
    };

    // Check if a movie is in the wishlist
    const inWishlist = (movie) => {
        return wishList.some((item) => item.id === movie.id); // Returns true if the movie is in the wishlist
    };

    return <WishlistContext.Provider value={{ wishList, addToWishlist, removeFromWishlist, inWishlist }}>{children}</WishlistContext.Provider>;
}

// Custom hook to use the Wishlist context
export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};

export default WishlistContext;
