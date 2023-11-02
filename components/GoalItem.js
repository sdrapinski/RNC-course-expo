import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  const { item, deleteGoalHandler } = props;
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => deleteGoalHandler(item.item.id)}
    >
      <View key={item.item.id} style={styles.goalItem}>
        <Text style={styles.goalText}>{item.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
