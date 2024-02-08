import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { type User } from '../../../types/user'

const handlePress = (): void => {
  // TODO 簡易登録
  router.replace('/memo/list')
}

const Signup = (): JSX.Element => {
  const [user, setUser] = useState<User>({ email: '', password: '' })

  const onChangeText = (value: string, type: 'email' | 'password'): void => {
    switch (type) {
      case 'email':
        setUser({ ...user, email: value })
        break
      case 'password':
        setUser({ ...user, password: value })
        break
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => {
            onChangeText(value, 'email')
          }}
          value={user.email}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(value) => {
            onChangeText(value, 'password')
          }}
          value={user.password}
          secureTextEntry
          autoCapitalize="none"
          textContentType="password"
        />
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
