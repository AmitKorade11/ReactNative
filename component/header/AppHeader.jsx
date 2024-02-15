import { Image, Text, View } from "react-native";
import { hStyle } from "./headerStyle";
import logo from "../../assets/logo.png";

export function AppHeader() {
  return (
    <View style={hStyle.header}>
      <Image style={hStyle.img} source={logo}></Image>
      <Text style={hStyle.title}>Schedule your day with ToDo list</Text>
    </View>
  );
}
