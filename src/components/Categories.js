import { View, Text, StyleSheet } from "react-native";

export default function Categories() {
    return (
        <View style={styles.container}>
            <Text>Powerlifting</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: 'white'
    }
});