import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './src/Navigator';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Lato': require('./assets/fonts/Lato.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Navigator />
    </>
  );
}
