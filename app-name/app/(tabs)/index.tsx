import { StatusBar } from 'expo-status-bar';
import { Text,View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open app.js to start working</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00751d' ,
    alignItems: 'center' ,
    justifyContent: 'center'
  },
});