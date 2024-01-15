import { create } from "zustand";

import { REQUEST_STATUS } from "@types";

type Weather = {
  data: any;
  status: REQUEST_STATUS;
};

interface WeatherState {
  weather: Weather;
  fetchWeather: (city: string, country: string) => void;
  cleanWeather: () => void;
}

const INITIAL_STATE = {
  data: {},
  status: REQUEST_STATUS.idle,
};

export const useWeather = create<WeatherState>((set) => ({
  weather: INITIAL_STATE,
  fetchWeather: async (city: string, country: string) => {
    try {
      set({
        weather: {
          data: {},
          status: REQUEST_STATUS.loading,
        },
      });
      const response =
        await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=${city},${country}&aqi=no
      `);
      set({
        weather: {
          data: await response.json(),
          status: REQUEST_STATUS.success,
        },
      });
    } catch (error) {
      console.info(error);
      set({
        weather: {
          data: {},
          status: REQUEST_STATUS.error,
        },
      });
    }
  },
  cleanWeather: () =>
    set(() => ({
      weather: INITIAL_STATE,
    })),
}));
