import { View, StyleSheet } from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { IconEnum } from '../../../types/icon'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '../../components/LogoutButton'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])

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
