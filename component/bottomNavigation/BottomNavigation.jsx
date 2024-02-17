import { TouchableOpacity, View, Text } from "react-native";
import { bnStyle } from "./BottomNavigationStyle";

export function BottomNavigation({ selectedTab, onPress, myList }) {
  const listCount = myList?.reduce(
    (acc, current) => {
      acc.done += current?.isCompleted ? 1 : 0;
      acc.pending += !current.isCompleted ? 1 : 0;
      return acc;
    },
    myList ? { all: myList.length, pending: 0, done: 0 } : {}
  );
  function getMenuStyle(tab) {
    return {
      fontSize: selectedTab == tab ? 18 : 15,
      color: selectedTab == tab ? "black" : "#1B5E20",
      fontWeight: selectedTab == tab ? "bold" : "600",
    };
  }
  return (
    <View style={bnStyle.bottomBar}>
      <TouchableOpacity
        style={bnStyle.menuButton}
        onPress={() => onPress("All")}
      >
        <Text style={getMenuStyle("All")}>All ({listCount.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={bnStyle.menuButton}
        onPress={() => onPress("Pending")}
      >
        <Text style={getMenuStyle("Pending")}>
          Pending ({listCount.pending})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={bnStyle.menuButton}
        onPress={() => onPress("Done")}
      >
        <Text style={getMenuStyle("Done")}>Done ({listCount.done})</Text>
      </TouchableOpacity>
    </View>
  );
}
