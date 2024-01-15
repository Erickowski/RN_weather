import { useEffect } from "react";
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

  useEffect(() => {
    if (
      weather.status === REQUEST_STATUS.success &&
      country.key !== weather.data?.location?.country
    ) {
      cleanWeather();
      handleShowAlert();
    }
  }, [weather.status]);

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View className="flex-1 bg-blue-700 justify-center">
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
