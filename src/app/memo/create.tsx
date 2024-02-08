import { StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { IconEnum } from '../../../types/icon'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import { useState } from 'react'

const handlePress = async (bodyText: string): Promise<void> => {
  try {
    if (auth.currentUser === null) throw new Error('ログインされていません')
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    await addDoc(ref, {
      bodyText,
      updateAt: Timestamp.fromDate(new Date())
    })
    router.back()
  } catch {}
}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState<string>('')

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(value) => {
            setBodyText(value)
          }}
          autoCapitalize="none"
          autoFocus
        />
      </View>
      <CircleButton
        onPress={() => {
          void handlePress(bodyText)
        }}
      >
        <Icon name={IconEnum.Check} />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    textAlignVertical: 'top',
    flex: 1,
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create
