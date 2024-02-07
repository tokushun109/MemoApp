import { StyleSheet, Text, View } from 'react-native'

const CircleButton = (): React.JSX.Element => {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>+</Text>
    </View>
  )
}

export default CircleButton

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    width: 64,
    aspectRatio: 1,
    borderRadius: 64 / 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
    bottom: 40,
    // iOS用の影
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 8
    },
    // Android用の影
    elevation: 8
  },
  circleButtonLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 44
  }
})
