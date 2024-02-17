import Dialog from "react-native-dialog";
import { View } from "react-native";
import { useState } from "react";

export const AddDialog = ({ show, no, addClick }) => {
  const [inputTodo, setInputTodo] = useState("");

  return (
    <Dialog.Container visible={show}>
      <Dialog.Title>Add Todo</Dialog.Title>
      <Dialog.Description>Do you want to create a todo</Dialog.Description>
      <Dialog.Input
        onChangeText={setInputTodo}
        placeholder="EX: Goto shopping"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Dialog.Button
          label="Add"
          onPress={() => {
            console.log("userInput => ", inputTodo);
            addClick(inputTodo);
          }}
        />
        <Dialog.Button label="No" onPress={() => no()} />
      </View>
    </Dialog.Container>
  );
};
