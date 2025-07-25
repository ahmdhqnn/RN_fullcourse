import { StyleSheet, Text, View } from "react-native";

export default function exampleScreen() {
    return (
        <View
            style={styles.view}
        >
            <Text>This is the Example Screen.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
