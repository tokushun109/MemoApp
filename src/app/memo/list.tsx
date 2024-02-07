import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'

const List = (): JSX.Element => {
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
      <CircleButton>
        <Feather name="plus" size={40}></Feather>
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default List
