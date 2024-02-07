import { Redirect } from 'expo-router'

const Index = (): JSX.Element => {
  // リダイレクト設定
  return <Redirect href="auth/signup"></Redirect>
}

export default Index
