import { TouchableOpacity, View, Text } from "react-native";

export const AddButton = ({ press }) => {
  return (
    <TouchableOpacity
      onPress={() => press()}
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#006064",
        position: "absolute",
        bottom: 56,
        end: 16,
        height: 50,
        width: 150,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        + Add Todo
      </Text>
    </TouchableOpacity>
  );
};
