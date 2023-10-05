import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import  UserProvider  from './src/Context/UserContext';
import Rotas from './src/Routes/Rotas';




export default function App() {
  return (
    <>
      <UserProvider>
        <StatusBar style='light'></StatusBar>
        <NavigationContainer>
          <Rotas />
        </NavigationContainer>
      </UserProvider>
    </>
  );
}


