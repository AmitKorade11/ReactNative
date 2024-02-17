import { StyleSheet } from "react-native";

export const eStyle = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontStyle: "italic",
    color: "gray",
    height: 40,
  },
  check: {
    resizeMode: "contain",
    height: 30,
    width: 30,
  },
  card: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: "#F1F8E9",
    borderRadius: 10,
    height: 120,
    justifyContent: "space-between",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
});
