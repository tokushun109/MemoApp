import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const LogoutButton = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text style={styles.container}>ログアウト</Text>
    </TouchableOpacity>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)'
  }
})
