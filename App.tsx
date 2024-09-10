import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation'
import { CommonStyle } from './src/styles';
import { Color } from './src/utils';
import BootSplash from "react-native-bootsplash";

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar backgroundColor={Color.primaryColor} />
      <MainNavigation />
    </SafeAreaView>
  );
}
export default App;
