import { create } from "zustand";

type Country = {
  label: string;
  value: string;
  key: string;
};

type Search = {
  city: string;
  country: Country;
};

interface SearchState {
  search: Search;
  setCity: (value: string) => void;
  setCountry: (value: Country) => void;
  cleanCountry: () => void;
}

const COUNTRY_INITIAL_STATE = {
  label: "",
  value: "",
  key: "",
};

const INITIAL_STATE = {
  city: "",
  country: COUNTRY_INITIAL_STATE,
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
  cleanCountry: () =>
    set((state) => ({
      search: {
        ...state.search,
        country: COUNTRY_INITIAL_STATE,
      },
    })),
}));
