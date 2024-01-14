import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { COUNTRIES } from "@types";

export function Form() {
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
      <TouchableWithoutFeedback>
        <View className="mt-12 bg-black p-3 justify-center">
          <Text className="text-white font-bold uppercase text-center text-lg">
            Buscar clima
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
