import { View, StyleSheet } from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { IconEnum } from '../../../types/icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  // 空オブジェクトのリストを作成
  const list: object[] = []
  for (let index = 0; index < 2; index++) {
    list.push({})
  }
  return (
    <View style={styles.container}>
      {list.map((_, i) => (
        <MemoListItem key={i} />
      ))}
      <CircleButton onPress={handlePress}>
        <Icon name={IconEnum.Plus} />
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
