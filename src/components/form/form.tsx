import { useMemo } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  Animated,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { COUNTRIES } from "@types";

export function Form() {
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

  return (
    <View>
      <View>
        <TextInput
          placeholder="Ciudad"
          className="p-3 h-12 bg-white text-xl mb-5 text-center"
          placeholderTextColor="#666"
        />
      </View>
      <View>
        <Picker itemStyle={{ height: 120, backgroundColor: "#FFF" }}>
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
