import { Redirect } from 'expo-router'

const Index = (): JSX.Element => {
  // リダイレクト設定
  return <Redirect href="memo/list"></Redirect>
}

export default Index
