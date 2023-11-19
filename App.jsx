import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import Rotas from './src/Routes/Rotas';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Sending']);

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <NavigationContainer>
       <Rotas/>
      </NavigationContainer>
      
    </>
  );
}


