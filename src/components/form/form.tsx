import { TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { COUNTRIES } from "@types";

export function Form() {
  return (
    <View className="mt-24">
      <View>
        <TextInput placeholder="City" className="text-neutral-600" />
      </View>
      <View>
        <Picker>
          <Picker.Item label="-- Selecciona un país --" value="" />
          {COUNTRIES.map((country) => (
            <Picker.Item label={country.label} value={country.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
