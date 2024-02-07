import { Redirect } from 'expo-router'

const Index = (): JSX.Element => {
  // リダイレクト設定
  return <Redirect href="auth/login"></Redirect>
}

export default Index
