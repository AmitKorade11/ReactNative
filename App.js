import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { myStyle } from "./AppStyle";
import { Text, View } from "react-native";
import { AppHeader } from "./component/header/AppHeader";
import { ElementCard } from "./component/body/ElementCard";
import { todoList } from "./data";
import { map } from "react";

const ListView = ({ list }) => {
  return (
    <View>
      {list.map((item) => (
        <ElementCard key={item.id} todo={item}></ElementCard>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={myStyle.appscreen}>
          <AppHeader style={myStyle.header} />
          <View style={myStyle.body}>
            <ListView list={todoList}></ListView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>

      <View style={myStyle.bottomNavigation}>
        <Text>Bottom Navigation</Text>
      </View>
    </>
  );
}
