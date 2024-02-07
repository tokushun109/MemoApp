import { View, Text, StyleSheet } from 'react-native'

const Index = (): React.JSX.Element => {
  // 空オブジェクトのリストを作成
  const list: object[] = []
  for (let index = 0; index < 10; index++) {
    list.push({})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {list.map((_, i) => (
        <View key={i}>
          <View>
            <Text>買い物リスト</Text>
            <Text>{new Date().toDateString()}</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      ))}

      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: 'blue',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    position: 'relative',
    alignItems: 'center'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'white'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  }
})

export default Index
