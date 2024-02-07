import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Hello from './src/components/Hello'

const App = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello
        style={{
          color: 'yellow'
        }}
        bang
      >
        Hello World
      </Hello>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
