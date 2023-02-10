import { Text, View, StyleSheet } from 'react-native';

//Simple headers for the workout app
export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Gym App</Text>
            <Text style={styles.boldHeader}>Pick a workout!</Text>
        </View>
    )
}

//Styles for the headers
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