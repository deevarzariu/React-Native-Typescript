import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoritesReducerStateType = {
  favorites: string[];
};

const initialState: FavoritesReducerStateType = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.favorites.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.favorites.splice(state.favorites.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
