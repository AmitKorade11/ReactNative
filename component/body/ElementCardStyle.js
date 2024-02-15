import { StyleSheet } from "react-native";

export const eStyle = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontStyle: "italic",
    color: "gray",
    height: 40,
  },
  card: {
    elevation: 5,
    backgroundColor: "#F1F8E9",
    borderRadius: 10,
    height: 70,
    justifyContent: "space-between",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  check: {
    resizeMode: "contain",
    height: 30,
    width: 30,
  },
});
