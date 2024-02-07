import { View, Text, StyleSheet } from 'react-native'

const Index = (): React.JSX.Element => {
  // 空オブジェクトのリストを作成
  const list: object[] = []
  for (let index = 0; index < 2; index++) {
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
        <View style={styles.memoListItem} key={i}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>{new Date().toDateString()}</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
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
  },
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: 'grey'
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
