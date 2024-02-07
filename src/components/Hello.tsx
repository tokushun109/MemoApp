import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  style?: TextStyle
}

const Hello = ({ children, bang = false, style }: Props): React.JSX.Element => {
  return (
    <View>
      <Text style={[styles.text, style]}>
        {children}
        {bang && '!'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 16
  }
})

export default Hello
