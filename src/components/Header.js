import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Gym App</Text>
            <Text style={styles.boldHeader}>Pick a workout!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 20,
    },
    lightHeader: {
        fontSize: 20,
    },
    boldHeader: {
        fontSize: 25,
        fontWeight: "bold",
    }
})