import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const GoalInput = ({
  enteredGoalText,
  addGoalHandler,
  goalInputHandler,
  modalIsVisible,
  closeAddGoalHandler,
}) => {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Enteryour goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="add Goal"
            onPress={() => addGoalHandler(enteredGoalText)}
          />
          <Button title="Cancel" onPress={closeAddGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 5,
    padding: 3,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
