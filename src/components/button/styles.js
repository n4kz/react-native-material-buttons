import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    justifyContent: 'space-around',
  },

  shadeContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },

  shade: {
    flex: 1,
  },
});

export { styles };
