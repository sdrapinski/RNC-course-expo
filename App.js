import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [curseGoals, setCurseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = (enteredText) => {
    setCurseGoals((prev) => [
      ...prev,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    closeAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCurseGoals((curr) => {
      return curr.filter((item) => item.id !== id);
    });
  };

  function startAddGoalHandler() {
    setmodalIsVisible(true);
  }
  function closeAddGoalHandler() {
    setmodalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Open modal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        modalIsVisible={modalIsVisible}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        closeAddGoalHandler={closeAddGoalHandler}
        enteredGoalText={enteredGoalText}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={curseGoals}
          renderItem={(item) => {
            return (
              <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 40,
    paddingLeft: 20,
  },

  goalContainer: {
    flex: 5,
  },
});
