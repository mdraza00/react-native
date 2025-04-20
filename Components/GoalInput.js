import { Button, Modal, TextInput, View } from "react-native";
import { styles } from ".";

export const GoalInput = ({ handleGoalInput, handleAddGoal, goalText }) => {
  return (
    <Modal>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          onChangeText={handleGoalInput}
          style={styles.inputBox}
          value={goalText}
        />
        <Button title="Add goal" onPress={handleAddGoal} color={"#5e0acc"} />
      </View>
    </Modal>
  );
};
