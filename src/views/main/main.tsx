import { View } from "react-native";

import { Form } from "@components";

export function Main() {
  return (
    <View className="flex-1 bg-blue-700 justify-center">
      <View className="mx-[2.5%]">
        <Form />
      </View>
    </View>
  );
}
