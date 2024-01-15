import { Text, View } from "react-native";

import { useWeather } from "@store";

export function Weather() {
  const { weather } = useWeather();

  return (
    <View className="mb-5">
      <Text className="text-white text-8xl text-center mr-0 font-bold">
        {weather.data.current.temp_c}
        <Text className="text-2xl font-normal">&#x2103;</Text>
      </Text>
    </View>
  );
}
