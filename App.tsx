import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from 'utils/theme';
import { client } from 'utils/graphql/client';
import { ApolloProvider, gql } from '@apollo/client';

export default function App(): JSX.Element {
  client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `,
    })
    .then((result) => console.log(result));
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!!!</Text>
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </ApolloProvider>
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
