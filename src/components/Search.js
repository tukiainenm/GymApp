import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/styles';

export default function Search() {
    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name='search' size={20} />
            <TextInput style={styles.input} placeholder='Search workouts' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 20,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 40,
    },
    elevation,
    input: {
        fontSize: 15,
        marginLeft: 5,
    }
})