import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { IconEnum } from '../../../types/icon'
import Icon from '../../components/Icon'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { auth, db } from '../../config'

import { doc, onSnapshot } from 'firebase/firestore'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  const [memo, setMemo] = useState<Memo | undefined>(undefined)
  const { id } = useLocalSearchParams()

  useEffect(() => {
    if (auth.currentUser === null) throw new Error('ログインされていません')
    if (typeof id !== 'string') throw new Error('不正なidです')
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    const unsubscribe = onSnapshot(ref, (_doc) => {
      const memoData = _doc.data()
      if (memoData === undefined || !('bodyText' in memoData && 'updatedAt' in memoData)) {
        throw new Error('不正なメモです')
      } else {
        const { bodyText, updatedAt } = _doc.data() as Memo
        setMemo({ id, bodyText, updatedAt })
      }
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>
          {memo?.bodyText}
        </Text>
        <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleDateString('ja-JP')}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
      </ScrollView>
      <CircleButton
        onPress={handlePress}
        style={{
          top: 64,
          bottom: 'auto'
        }}
      >
        <Icon name={IconEnum.Pencil} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  memoHeader: {
    backgroundColor: 'blue',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: { marginVertical: 32, paddingHorizontal: 27 },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black'
  }
})

export default Detail
