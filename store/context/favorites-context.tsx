import { createContext, useState } from "react";

interface Props {
  children: JSX.Element;
}

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

const INIT_CONTEXT = {
  favorites: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
};

export const FavoritesContext =
  createContext<FavoritesContextType>(INIT_CONTEXT);

function FavoritesProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavorites((currentFavorites) => [...currentFavorites, id]);
  }

  function removeFavorite(id: string) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite !== id)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
