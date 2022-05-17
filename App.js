import TaskList from './src/screens/TaskList';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Auth from './src/screens/Auth';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Lato': require('./assets/fonts/Lato.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      {/*<TaskList />*/}
      <Auth />
    </>
  );
}
