import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { React } from 'react';
import Header from './src/components/Header';
import Search from './src/components/Search';
import Categories from './src/components/Categories';

export default function App() {
  return (
    <View>
      <Header />
      <Search />
      <Categories />
      <StatusBar style="auto" />
    </View>
  );
}


