import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewMain from "./screens/ViewMain/ViewMain";

export default function App() {
  return (
    <View style={styles.container}>
      <ViewMain />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    justifyContent: 'center',
  },
});

