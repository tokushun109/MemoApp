import { View, StyleSheet, FlatList } from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { IconEnum } from '../../../types/icon'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import LogoutButton from '../../components/LogoutButton'

import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])

  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])

  useEffect(() => {
    if (auth.currentUser === null) throw new Error('ログインされていません')
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const _memos: Memo[] = []
      snapshot.forEach((doc) => {
        const memoData = doc.data()
        if (!('bodyText' in memoData && 'updatedAt' in memoData)) {
          console.error('不正なメモです')
        } else {
          const { bodyText, updatedAt } = doc.data() as Memo
          _memos.push({
            id: doc.id,
            bodyText,
            updatedAt
          })
        }
      })
      setMemos(_memos)
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <FlatList data={memos} renderItem={({ item }) => <MemoListItem memo={item} />} />
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
