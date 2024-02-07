import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

import fontDate from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'
import { type IconType } from '../../types/icon'

const CustomIcon = createIconSetFromIcoMoon(fontSelection, 'IcoMoon', 'icomoon.ttf')

interface Props {
  name: IconType
  size?: number
  color?: string
}

const Icon = ({ name, size = 40, color = 'white' }: Props): JSX.Element | null => {
  const [fontLoaded] = useFonts({
    IcoMoon: fontDate
  })
  if (!fontLoaded) return null
  return <CustomIcon name={name} size={size} color={color} />
}

export default Icon
