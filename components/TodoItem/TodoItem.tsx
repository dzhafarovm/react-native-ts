import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./TodoItemStyle";
import { ITodo } from "../../interface";

interface IProps {
  item: ITodo;
  deleteHandler: (id: string) => void;
}

const TodoItem = ({ item, deleteHandler }: IProps) => {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.id)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
