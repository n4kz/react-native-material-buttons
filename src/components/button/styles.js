import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    height: 36,
    minWidth: 88,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingLeft: 16,
    paddingRight: 16,

    margin: 4,
  },

  shade: {
    ...StyleSheet.absoluteFillObject,
  },
});

export { styles };
