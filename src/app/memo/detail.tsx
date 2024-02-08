import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { IconEnum } from '../../../types/icon'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>{new Date().toDateString()}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {
            '買い物リスト\n書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。\n\nカタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。\n\nダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。買い物リスト\n書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。\n\nカタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。\n\nダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。'
          }
        </Text>
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
