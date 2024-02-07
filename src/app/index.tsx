import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'

const Index = (): React.JSX.Element => {
  // 空オブジェクトのリストを作成
  const list: object[] = []
  for (let index = 0; index < 2; index++) {
    list.push({})
  }
  return (
    <View style={styles.container}>
      <Header />
      {list.map((_, i) => (
        <MemoListItem key={i} />
      ))}

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  circleButton: {
    position: 'absolute',
    width: 64,
    aspectRatio: 1,
    borderRadius: 64 / 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
    bottom: 40,
    // iOS用の影
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 8
    },
    // Android用の影
    elevation: 8
  },
  circleButtonLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 44
  }
})

export default Index
