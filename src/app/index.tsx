import { View, Text, StyleSheet } from 'react-native'

const Index = (): React.JSX.Element => {
  // 空オブジェクトのリストを作成
  const list: object[] = []
  for (let index = 0; index < 10; index++) {
    list.push({})
  }
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
