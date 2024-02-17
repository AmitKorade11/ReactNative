import { View, Text, Image, TouchableOpacity } from "react-native";
import { eStyle } from "./ElementCardStyle";
import check from "../../assets/check.png";
import pending from "../../assets/pending.png";

export function ElementCard({ todo, onPress, longPress }) {
  // console.log("list = " + JSON.stringify(todo, null, 2));
  return (
    <TouchableOpacity
      onLongPress={() => longPress(todo)}
      onPress={() => onPress(todo)}
      style={eStyle.card}
    >
      <Text
        style={[
          eStyle.heading,
          todo.isCompleted && { textDecorationLine: "line-through" },
          !todo.isCompleted && { textDecorationLine: "none" },
        ]}
      >
        {todo.title}
      </Text>
      <Image
        style={eStyle.check}
        source={todo.isCompleted == true ? check : pending}
      />
    </TouchableOpacity>
  );
}
