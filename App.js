import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { myStyle } from "./AppStyle";
import { Alert, ScrollView, Text, View } from "react-native";
import { AppHeader } from "./component/header/AppHeader";
import { ElementCard } from "./component/body/ElementCard";
import { data } from "./data";
import { map, useEffect, useRef, useState } from "react";
import { BottomNavigation } from "./component/bottomNavigation/BottomNavigation";
import { AddDialog } from "./component/util/AddDialog";
import { AddButton } from "./component/util/AddButton";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

let isFirstLoad = true;
let isEffectFromLoad = false;
export default function App() {
  // const [todoList, setTodoList] = data();
  const [todoList, setTodoList] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("All");
  const [show, setShow] = useState(false);
  const scrollviewRef = useRef();

  useEffect(() => {
    loadListFromStorage();
  }, []);
  useEffect(() => {
    if (!isEffectFromLoad) {
      if (!isFirstLoad) {
        saveTodoInStorage(todoList);
      } else {
        isFirstLoad = false;
      }
    } else {
      isEffectFromLoad = false;
    }
  }, [todoList]);

  function onUpdateTodo(todo) {
    const updatedVal = { ...todo, isCompleted: !todo.isCompleted };

    const allTodoList = [...todoList];
    const indexOfUpdatedTodo = todoList.findIndex(
      (currentTodo) => currentTodo.id === updatedVal.id
    );
    allTodoList[indexOfUpdatedTodo] = updatedVal;
    setTodoList(allTodoList);
  }

  function deleteAlert(todo) {
    Alert.alert("Alert", "Do you really want to delete this todo", [
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          console.log("deleting todo=> ", todo);
          const updatedList = todoList.filter((temp) => temp.id !== todo.id);
          setTodoList(updatedList);
        },
      },
      { text: "Cancel", style: "cancel" },
    ]);
  }

  const ListView = ({ list }) => {
    return (
      <View style={myStyle.listview}>
        {list.map((item) => (
          <ElementCard
            key={item.id}
            todo={item}
            onPress={onUpdateTodo}
            longPress={deleteAlert}
          ></ElementCard>
        ))}
      </View>
    );
  };

  function getFilteredList() {
    switch (selectedMenu) {
      case "All": {
        return todoList;
      }
      case "Pending": {
        return todoList.filter((todo) => !todo.isCompleted);
      }
      case "Done": {
        return todoList.filter((todo) => todo.isCompleted);
      }
    }
  }

  function addTodo(input) {
    const tempTodo = {
      id: todoList.length + 1,
      // id: uuid.v4(),
      title: input,
      isCompleted: false,
    };
    const updatedList = [...todoList, tempTodo];

    console.log("Created a todo => ", updatedList);
    setTodoList(updatedList);
    setShow(false);
  }

  async function loadListFromStorage() {
    console.log("get todo list from async storage");
    try {
      const myTodoList = await AsyncStorage.getItem("@dbTodoList");
      const tempList = JSON.parse(myTodoList);
      isEffectFromLoad = true;
      setTodoList(tempList);
    } catch (error) {
      alert(error);
    }
  }

  async function saveTodoInStorage(updatedList) {
    console.log("save todo in list of async storage");
    try {
      await AsyncStorage.setItem("@dbTodoList", JSON.stringify(updatedList));
    } catch (error) {
      alert(error);
    }
    setTimeout(() => {
      scrollviewRef.current.scrollToEnd();
    }, 500);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={myStyle.appscreen}>
          <AppHeader style={myStyle.header} />
          <View style={myStyle.body}>
            <ScrollView ref={scrollviewRef}>
              <ListView list={getFilteredList()}></ListView>
            </ScrollView>
          </View>
          <AddButton
            press={() => {
              setShow(!show);
            }}
          ></AddButton>
        </SafeAreaView>
      </SafeAreaProvider>

      <AddDialog
        show={show}
        no={() => {
          setShow(false);
        }}
        addClick={addTodo}
      ></AddDialog>
      <View style={myStyle.bottomNavigation}>
        <BottomNavigation
          selectedTab={selectedMenu}
          onPress={setSelectedMenu}
          myList={todoList}
        />
      </View>
    </>
  );
}
