import { Pressable, Text, View } from "react-native";
import { styles } from ".";

export const GoalItem = ({ goal, handleDeleteGoal }) => {
  return (
    <View style={styles.listItem}>
      <Pressable android_ripple={{ color: '#7368a5' }} onPress={() => handleDeleteGoal(goal)}
      style={({pressed})=>pressed && styles.pressedItem}
      >
        <Text style={styles.listGoal}>
          {goal.goal}
        </Text>
        </Pressable>
    </View>
  );
};
