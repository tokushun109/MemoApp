import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  label?: string
  onPress?: () => void
}

const Button = ({ label = 'Submit', onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
