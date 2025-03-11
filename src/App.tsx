import React from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
}

  from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles/styles.tsx';
import AllUserScreen from './modules/AllUserScreen/AllUserScreen.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { MyRoutes } from './utils/MyRoutes.tsx';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <MyRoutes/>
  );
}

export default App;
