import { StyleSheet } from "react-native";

export const hStyle = StyleSheet.create({
  header: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 60,
    justifyContent: "flex-start",
    alignItems: "center",
    elevation: 3,
    padding: 8,
    margin: 5,
  },
  title: {
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B5E20",
  },
  subtitle: {
    padding: 5,
    fontSize: 10,
    fontWeight: "500",
    color: "#388E3C",
    marginTop: -12,
  },
  img: {
    padding: 2,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
