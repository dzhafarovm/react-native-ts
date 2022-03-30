import React, { useState } from "react";
import { StyleSheet, Text, View, ViewStyle, FlatList } from "react-native";

import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";
import AddTodo from "./components/AddTodo/AddTodo";
import data from "./data.json";
import { ITodo } from "./interface";

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>(data);

  const deleteHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((el) => el.id !== id));
  };

  const addTodo = (text: string) => {
    const item: ITodo = {
      text,
      id: Date.now().toString(),
    };

    setTodos((prevState) => [...prevState, item]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addTodo={addTodo} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteHandler={deleteHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  list: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});
