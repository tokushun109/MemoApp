import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import { IconEnum } from '../../types/icon'
import { Link } from 'expo-router'
import { type Memo } from '../../types/memo'

interface Props {
  memo: Memo
}

const MemoListItem = ({ memo }: Props): JSX.Element => {
  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>
            {memo.bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>{memo.updatedAt.toDate().toLocaleString('ja-JP')}</Text>
        </View>
        <TouchableOpacity>
          <Icon name={IconEnum.Delete} color="grey" size={32} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default MemoListItem
