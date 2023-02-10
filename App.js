import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

export default function App() {

  //let term = "Powerlifting";
  const [term, setTerm] = useState("Powerlifting")
  const workoutCategories = [
    {
      categoryName: "Powerlifting",
      imageUrl: require('./src/assets/images/deadlift.png')
    },
    {
      categoryName: "Crossfit",
      imageUrl: require('./src/assets/images/crossfit.png')
    },
    {
      categoryName: "Weightlifting",
      imageUrl: require('./src/assets/images/weightlifting.png')
    },
    {
      categoryName: "Bodyweight",
      imageUrl: require('./src/assets/images/bodyweight.png')
    },
    {
      categoryName: "Running",
      imageUrl: require('./src/assets/images/running.png')
    },
    {
      categoryName: "Climbing",
      imageUrl: require('./src/assets/images/climbing.png')
    },
  ];


  return (
    <View>
      <Header />
      <Search />
      <View>
        <FlatList
          data={workoutCategories}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem
                categoryName={item.categoryName}
                imageUrl={item.imageUrl}
                index={index}
                active={item.categoryName === term}
                handlePress={() => setTerm(item.categoryName)} />
            )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


