import { Text, TextInput, View } from "react-native";

export function Form() {
  return (
    <View className="mt-24">
      <View>
        <Text>Form</Text>
        <TextInput placeholder="City" className="text-neutral-600" />
      </View>
    </View>
  );
}
