import { useEffect, useMemo } from "react";
import { View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import { Form, Weather } from "@components";
import { useWeather, useSearch } from "@store";
import { REQUEST_STATUS } from "@types";

export function Main() {
  const { weather, cleanWeather } = useWeather();
  const {
    search: { country },
  } = useSearch();

  const handleHideKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleShowAlert = () => {
    Alert.alert("Error", "Ciudad y país no validos", [{ text: "Entendido" }]);
  };

  const BackgroundColor = useMemo(() => {
    if (weather.status !== REQUEST_STATUS.success) return "bg-blue-700";

    if (weather.data.current.temp_c < 10) {
      return "bg-blue-300";
    }

    if (weather.data.current.temp_c >= 10 && weather.data.current.temp_c < 23) {
      return "bg-blue-700";
    }

    return "bg-red-600";
  }, [weather.status]);

  useEffect(() => {
    if (
      weather.status === REQUEST_STATUS.success &&
      country.key !== weather.data?.location?.country
    ) {
      handleShowAlert();
      cleanWeather();
    }
  }, [weather.status]);

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View className={`flex-1 justify-center ${BackgroundColor}`}>
        <View className="mx-[2.5%]">
          <View className="min-h-[150px]">
            {weather.status === REQUEST_STATUS.success ? <Weather /> : null}
          </View>
          <Form />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
