import { FlatList, Text, View } from "react-native";
import { GoalItem, styles } from ".";

export const GoalsContainer = ({ goals, handleDeleteGoal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={goals}
        renderItem={(item) => <GoalItem goal={item.item} handleDeleteGoal={handleDeleteGoal} />}
      />
    </View>
  );
};
