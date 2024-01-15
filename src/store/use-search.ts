import { create } from "zustand";

type Search = {
  city: string;
  country: string;
};

interface SearchState {
  search: Search;
  setCity: (value: string) => void;
  setCountry: (value: string) => void;
}

const INITIAL_STATE = {
  city: "",
  country: "",
};

export const useSearch = create<SearchState>((set) => ({
  search: INITIAL_STATE,
  setCity: (value) =>
    set((state) => ({
      search: {
        ...state.search,
        city: value,
      },
    })),
  setCountry: (value) =>
    set((state) => ({
      search: {
        ...state.search,
        country: value,
      },
    })),
}));
