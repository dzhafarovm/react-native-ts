import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

interface IProps {
  addTodo: (text: string) => void;
}

const AddTodo = ({ addTodo }: IProps) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <View>
      <TextInput
        placeholder="add country name..."
        value={value}
        onChangeText={setValue}
      />
      <Button title="Add todo" onPress={addItem} color="tomato" />
    </View>
  );
};

export default AddTodo;
