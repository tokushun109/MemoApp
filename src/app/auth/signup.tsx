import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'

const handlePress = (): void => {
  // TODO 簡易登録
  router.push('/memo/list')
}

const Signup = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email" />
        <TextInput style={styles.input} value="Pass" />
        <Button onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already Registered?</Text>
          <Link href="/auth/login" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in.</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: 'black'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: 'blue'
  }
})

export default Signup
