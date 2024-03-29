import { StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { IconEnum } from '../../../types/icon'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.back()
}

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
      </View>
      <CircleButton onPress={handlePress}>
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

export default Edit
