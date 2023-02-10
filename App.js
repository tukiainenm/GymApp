import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import CategoryItem from './src/components/CategoryItem';

export default function App() {

  const workoutCategories = [
    {
      category: "Powerlifting",
      imageUrl: require('./src/assets/images/deadlift.png')
    },
    {
      category: "Crossfit",
      imageUrl: require('./src/assets/images/crossfit.png')
    },
    {
      category: "Weightlifting",
      imageUrl: require('./src/assets/images/weightlifting.png')
    },
  ]

  return (
    <View>
      <Header />
      <Search />
      <FlatList
        data={workoutCategories}
        renderItem={({ item }) => {
          return (
            <CategoryItem category={item.category} imageUrl={item.imageUrl} />
          )
        }}
        horizontal
      />


      {/*<CategoryItem category="Powerlifting" imageUrl={require('./src/assets/images/deadlift.png')}/>
      <CategoryItem category="Crossfit" imageUrl={require('./src/assets/images/crossfit.png')}/>
  <CategoryItem category="Weightlifting" />*/}
      <StatusBar style="auto" />
    </View>
  );
}


