import { StyleSheet, View } from "react-native";
import { Button, SegmentedButtons, TextInput } from "react-native-paper";

const FREQUENCIES = ["daily", "weakly", "monthly"];

export default function AddHabbitScreen() {
  return (
    <View style={styles.container}>
      <TextInput label="Title" mode="outlined" style={styles.input} />
      <TextInput label="Description" mode="outlined" style={styles.input} />
      <View style={styles.frequencyContainer}>
        <SegmentedButtons
          buttons={FREQUENCIES.map((freq) => ({
            value: freq,
            label: freq.charAt(0).toUpperCase() + freq.slice(1),
          }))}
        />
      </View>
      <Button mode="contained" onPress={() => {}} >
        Add Habbit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },

  input: {
    marginBottom: 16,

  },

  frequencyContainer: {
    marginBottom: 24,
  },

});
