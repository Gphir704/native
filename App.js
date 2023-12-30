import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";
let id = 0;
export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    id++;
    const text = `TODO NUM ${id}`;
    setTodos([...todos, { id, text, checked: false }]);
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="addTodo" onPress={addTodo} />
      <ScrollView style={styles.todoContainer}>
        {todos.map((task) => (
          <Text key={task.id} style={styles.todoItem}>
            {task.text}
            <Button
              title="Delete"
              onPress={() => onDelete(task.id)}
              style={styles.check}
            />

            <Button
              title={task.checked ? "checked" : "check"}
              onPress={() => onToggle(task.id)}
            />
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    borderWidth: 1,
    width: "90%",
  },
  todoItem: {
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    padding: 15,
    marginTop: 15,
    borderRadius: 20,
  },
  check: {
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "green",
    borderRadius: 20,
    width: 10,
  },
});
