import { useMemo } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  Alert,
  Animated,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { COUNTRIES } from "@types";
import { useSearch, useWeather } from "@store";

export function Form() {
  const {
    search: { city, country },
    setCity,
    setCountry,
  } = useSearch();

  const { fetchWeather } = useWeather();

  const buttonAnimation = useMemo(() => {
    return new Animated.Value(1);
  }, []);

  const handleInAnimation = () => {
    Animated.spring(buttonAnimation, {
      toValue: 0.8,
      useNativeDriver: false,
    }).start();
  };

  const handleOutAnimation = () => {
    Animated.spring(buttonAnimation, {
      toValue: 1,
      friction: 4,
      tension: 30,
      useNativeDriver: false,
    }).start();
  };

  const styleAnimation = useMemo(
    () => ({
      transform: [{ scale: buttonAnimation }],
    }),
    [buttonAnimation]
  );

  const handleShowAlert = () => {
    Alert.alert("Error", "Agrega una ciudad y un país para la búsqueda", [
      { text: "Entendido" },
    ]);
  };

  const handleSubmit = () => {
    if (city.trim() === "" || country.trim() === "") {
      handleShowAlert();
      return;
    }

    fetchWeather(city, country);
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Ciudad"
          className="p-3 h-12 bg-white text-xl mb-5 text-center"
          placeholderTextColor="#666"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <View>
        <Picker
          onValueChange={setCountry}
          selectedValue={country}
          itemStyle={{ height: 120, backgroundColor: "#FFF" }}
        >
          <Picker.Item label="-- Selecciona un país --" value="" />
          {COUNTRIES.map((country) => (
            <Picker.Item
              key={country.value}
              label={country.label}
              value={country.value}
            />
          ))}
        </Picker>
      </View>
      <TouchableWithoutFeedback
        onPressIn={handleInAnimation}
        onPressOut={handleOutAnimation}
        onPress={handleSubmit}
      >
        <Animated.View
          style={styleAnimation}
          className="mt-12 bg-black p-3 justify-center"
        >
          <Text className="text-white font-bold uppercase text-center text-lg">
            Buscar clima
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
