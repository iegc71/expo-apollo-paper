import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from 'utils/theme';

export default function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!!!</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
