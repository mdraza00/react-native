import { useState } from "react";
import { View } from "react-native";
import { GoalInput, GoalsContainer, styles } from "./Components";

export default function App() {
  const [goalText, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);
  const handleGoalInput = (goalInput) => {
    setGoalInput(goalInput);
  };

  const handleAddGoal = () => {
    const goal = { goal: goalText, key: goals.length + 1 };
    setGoals((prv) => [goal, ...prv]);
    setGoalInput('');
  };

  const handleDeleteGoal = (deleteGoal) => {
    setGoals(prvGoals => prvGoals.filter((goal) => goal.key !== deleteGoal.key));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        handleAddGoal={handleAddGoal}
        handleGoalInput={handleGoalInput}
        goalText={goalText}
      />
      <GoalsContainer goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </View>
  );
}
