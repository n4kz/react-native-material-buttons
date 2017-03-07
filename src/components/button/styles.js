import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ripple: {
    borderRadius: 2,
    height: 36,
    minWidth: 88,

    justifyContent: 'space-around',

    paddingHorizontal: 16,
  },

  shade: {
    ...StyleSheet.absoluteFillObject,
  },
});

export { styles };
