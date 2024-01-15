import { Text, View, Image } from "react-native";

import { useWeather } from "@store";

export function Weather() {
  const { weather } = useWeather();

  if (!weather.data?.current) return null;

  return (
    <View className="mb-5">
      <Text className="text-white text-8xl text-center mr-0 font-bold">
        {weather.data.current.temp_c}
        <Text className="text-2xl font-normal">&#x2103;</Text>
        <Image
          className="w-16 h-14"
          source={{
            uri: `https:${weather.data.current.condition.icon}`,
          }}
        />
      </Text>
      <View className="flex-row justify-center text-2xl">
        <Text className="text-white mr-3">
          Sensacion termica:
          <Text className="font-bold ml-1">
            {weather.data.current.feelslike_c} &#x2103;
          </Text>
        </Text>
        <Text className="text-white">
          Humedad:
          <Text className="font-bold ml-1">
            {weather.data.current.humidity} %
          </Text>
        </Text>
      </View>
    </View>
  );
}
