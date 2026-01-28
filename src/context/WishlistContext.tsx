import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

export interface WishlistItem {
    id: string;
    name: string;
    price: number;
    image: string;
    weight?: string;
}

interface WishlistContextType {
    items: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (id: string) => void;
    isInWishlist: (id: string) => boolean;
    getWishlistCount: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<WishlistItem[]>([]);
    const isInitialized = useRef(false);

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            try {
                setItems(JSON.parse(savedWishlist));
            } catch (error) {
                console.error('Failed to parse wishlist from local storage:', error);
            }
        }
        isInitialized.current = true;
    }, []);

    useEffect(() => {
        if (isInitialized.current) {
            localStorage.setItem('wishlist', JSON.stringify(items));
        }
    }, [items]);

    const addToWishlist = (item: WishlistItem) => {
        setItems((prevItems) => {
            if (prevItems.some((i) => i.id === item.id)) {
                return prevItems; // Already in wishlist
            }
            return [...prevItems, item];
        });
    };

    const removeFromWishlist = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const isInWishlist = (id: string) => {
        return items.some((item) => item.id === id);
    };

    const getWishlistCount = () => {
        return items.length;
    };

    return (
        <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist, getWishlistCount }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
