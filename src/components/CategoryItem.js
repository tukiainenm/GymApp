import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";


export default function CategoryItem({
    categoryName,
    imageUrl,
    index,
    active,
    handlePress
}) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View
                style={[styles.container,
                styles.elevation,
                index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
                active
                    ? { backgroundColor: "orange" }
                    : { backgroundColor: "white" }
                ]}
            >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imageUrl} />
                </View>
                <Text style={styles.categoryText}>{categoryName}</Text>
            </View>
        </TouchableOpacity>
    )
};

//Styles for the category navigation buttons
const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
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