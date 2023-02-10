import { View, Text, StyleSheet, Image } from "react-native";
import { elevation } from "../common/styles";


export default function CategoryItem({ category, imageUrl }) {
    return (
        <View style={[styles.container, styles.elevation]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={imageUrl}/>
            </View>
            <Text style={styles.categoryText}>{category}</Text>
        </View>
    )
};

//Styles for the category navigation buttons
const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        marginHorizontal: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    elevation,
    image: {
        width: 35,
        height: 35,
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 5
    },
    categoryText: {
        fontSize: 12,
    }
});