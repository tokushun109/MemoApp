import { Stack } from 'expo-router'

const Layout = (): JSX.Element => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: 'blue'
      },
      headerTintColor: 'white',
      headerTitle: 'Memo App',
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: 'bold'
      },
      headerBackTitle: 'Back'
    }}
  />
)

export default Layout
