import { View, Text, Image } from "react-native";
import { eStyle } from "./ElementCardStyle";
import check from "../../assets/check.png";
import pending from "../../assets/pending.png";

export function ElementCard({ todo }) {
  console.log("list = " + JSON.stringify(todo, null, 2));
  return (
    <View style={eStyle.card}>
      <Text style={eStyle.heading}>{todo.title}</Text>
      <Image
        style={eStyle.check}
        source={todo.isCompleted == true ? check : pending}
      />
    </View>
  );
}
